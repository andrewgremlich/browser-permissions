import { getPermissionIcon, Check, Xmark } from "./icons";
import { getPermissionQuery } from "./permissions-helpers";
import { getPermissionsState } from "./permissions-helpers/helpers";
import { Permissions } from "./types";

/**
 * 
 * @param dataName The name to ID the permission to display.
 * @param isAllowed To disable the buttons or not.
 * @returns An HTML template string for this web component.
 */
const template = (dataName: string, isAllowed?: boolean) => {
  return `
  <style>
    :host {
      --browser-permission-width: 200px;
    }

    .fade-in {
      right: 30px !important;
      opacity: 1 !important;
    }

    .fade-out {
      right: calc(0px - var(--browser-permission-width)) !important;
      opacity: 0 !important;
    }

    .request-permission {
      position: fixed;
      bottom: 30px;
      width: var(--browser-permission-width);

      right: calc(0px - var(--browser-permission-width));
      transition: right 0.5s ease-in-out, opacity 0.5s ease-in-out;
      opacity: 0;
      
      border-radius: 15px;
      box-shadow: 0px 0px 5px 0px rgba(0 0 0 / 0.50);
      padding: 10px;

      background-color: white;
    }

    .permission-title {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      & > svg {
        margin-right: 10px;
      }
    }

    p {
      margin: 0;
    }
  </style>

  <div class="request-permission">
    <div class="permission-title">
      ${getPermissionIcon(dataName as Permissions)} <p>Trigger ${dataName}?</p>
    </div>
    <slot name="reason"></slot>
    <button ${
      isAllowed === undefined ? "" : "disabled"
    } type="button" data-name"${dataName}" class="permission-trigger">${Check}
    </button>
    <button ${
      isAllowed === undefined ? "" : "disabled"
    }  type="button" class="permission-deny">${Xmark}</button>
  </div>
  `;
};

/**
 * @attribute permission-name - The name of the permission to request.
 * @content reason - The reason for requesting the permission. To be displayed in the UI. Needs `slot="reason"` attribute.
 */
export class RequestPermission extends HTMLElement {
  static observedAttributes = ["permission-name"];

  #permissionName!: Permissions;
  #isAllowed?: boolean = undefined;
  #permissionTrigger!: HTMLButtonElement | null | undefined;

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const permissionName: Permissions | null = this.getAttribute(
      "permission-name",
    ) as Permissions;

    if (!permissionName) {
      throw new Error(
        "'permission-name' attribute is required on permission-item element.",
      );
    }

    this.#permissionName = permissionName;

    const permissionState = await getPermissionsState(permissionName)();
    this.#isAllowed = permissionState.allowed;

    if (permissionState.allowed) {
      return;
    }

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template(
        this.#permissionName ?? "",
        this.#isAllowed,
      );
    }

    if (this.#isAllowed === undefined) {
      this.activate();
    }

    // there may need to be another component or feature to trigger with the user
    // tries to activate something that requires permissions.
    this.#permissionTrigger = this.shadowRoot?.querySelector(
      ".permission-trigger",
    );

    this.#permissionTrigger?.addEventListener("click", () =>
      this.triggerPermission(permissionName),
    );
  }

  activate() {
    setTimeout(() => {
      this.shadowRoot
        ?.querySelector(".request-permission")
        ?.classList.add("fade-in");
    }, Math.random() * 1000);
  }

  deactivate() {
    this.shadowRoot
      ?.querySelector(".request-permission")
      ?.classList.add("fade-out");
  }

  addLoadingIndicator() {
    if (this.#permissionTrigger) {
      this.#permissionTrigger?.setAttribute("disabled", "true");
      this.#permissionTrigger?.classList.add("loading");
      this.#permissionTrigger.innerText = "Loading...";
    } else {
      throw new Error("Permission trigger not found.");
    }
  }

  removeLoadingIndicator() {
    if (this.#permissionTrigger) {
      this.#permissionTrigger?.removeAttribute("disabled");
      this.#permissionTrigger?.classList.remove("loading");
      this.#permissionTrigger.innerText = "Trigger";
    } else {
      throw new Error("Permission trigger not found.");
    }
  }

  async triggerPermission(string: Permissions) {
    this.addLoadingIndicator();

    const result = await getPermissionQuery(string)();

    this.#isAllowed = result.allowed;

    const permissionState = await getPermissionsState(this.#permissionName)();
    this.#isAllowed = permissionState.allowed;

    this.removeLoadingIndicator();

    if (this.#isAllowed) {
      this.deactivate();
    }
  }
}
