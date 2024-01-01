import { getPermissionIcon } from "./icons";
import { getPermissionQuery } from "./permissions-helpers";
import { getPermissionsState } from "./permissions-helpers/helpers";
import { Permissions } from "./types";

const template = (dataName: string, isAllowed?: boolean) => {
  return `
  <style>
    .request-permission {
      border: 1px solid black;
      border-radius: 15px;
      padding: 10px;

      background-color: white;
      // position: absolute;
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
    <button ${
      isAllowed === undefined ? "" : "disabled"
    } type="button" data-name"${dataName}" class="permission-trigger">${
      isAllowed === undefined ? "Trigger" : isAllowed ? "Granted" : "Denied"
    }</button>
  </div>
  `;
};

export class RequestPermission extends HTMLElement {
  static observedAttributes = ["request-reason", "permission-name"];

  #permissionName!: Permissions;
  #isAllowed?: boolean = undefined;
  #shadow!: ShadowRoot;

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const reasonForRequest = this.getAttribute("request-reason");
    const permissionName: Permissions | null = this.getAttribute(
      "permission-name",
    ) as Permissions;

    if (!permissionName) {
      throw new Error(
        "'permission' attribute is required on permission-item element.",
      );
    }

    this.#permissionName = permissionName;
    this.#shadow = shadow;

    const permissionState = await getPermissionsState(permissionName)();
    this.#isAllowed = permissionState.allowed;

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
    this.#shadow.innerHTML = template(
      this.#permissionName ?? "",
      this.#isAllowed,
    );
  }
}
