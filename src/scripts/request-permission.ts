import { getPermissionIcon } from "./icons";
import { getPermissionQuery } from "./permissions-helpers";
import { getPermissionsState } from "./permissions-helpers/helpers";
import { Permissions } from "./types";

const template = (dataName: string, isAllowed?: boolean) => {
  return `
  <style>
    .request-permission {
      border-radius: 15px;
      box-shadow: 0px 0px 5px 0px rgba(0 0 0 / 0.50);
      padding: 10px;

      background-color: white;

      opacity: 1;
      transition: opacity 5s ease-in-out;
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
    } type="button" data-name"${dataName}" class="permission-trigger">${
      isAllowed === undefined ? "Trigger" : isAllowed ? "Granted" : "Denied"
    }</button>
  </div>
  `;
};

export class RequestPermission extends HTMLElement {
  static observedAttributes = ["permission-name"];

  #permissionName!: Permissions;
  #isAllowed?: boolean = undefined;
  #shadow!: ShadowRoot;

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
        "'permission' attribute is required on permission-item element.",
      );
    }

    this.#permissionName = permissionName;

    const permissionState = await getPermissionsState(permissionName)();
    this.#isAllowed = permissionState.allowed;

    if (permissionState.allowed) {
      return;
    }

    this.render();

    // there may need to be another component or feature to trigger with the user
    // tries to activate something that requires permissions.
    shadow
      .querySelector(".permission-trigger")
      ?.addEventListener("click", () => this.triggerPermission(permissionName));
  }

  async triggerPermission(string: Permissions) {
    const result = await getPermissionQuery(string)();

    this.#isAllowed = result.allowed;

    const permissionState = await getPermissionsState(this.#permissionName)();
    this.#isAllowed = permissionState.allowed;

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = template(
      this.#permissionName ?? "",
      this.#isAllowed,
    );
  }
}
