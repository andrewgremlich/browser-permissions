import { getPermissionIcon } from "./icons";
import { getPermissionQuery } from "./permissions-helpers";
import { Permissions } from "./types";

const template = (dataName: string, isAllowed?: boolean) => {
  return `
  <p>Request ${dataName}? ${getPermissionIcon(dataName as Permissions)}</p>
  <button ${
    isAllowed === undefined ? "" : "disabled"
  } type="button" data-name"${dataName}" class="permission-grant">${
    isAllowed === undefined ? "Trigger" : isAllowed ? "Granted" : "Denied"
  }</button>
  `;
};

export class RequestPermission extends HTMLElement {
  #permissionName!: Permissions;
  #isAllowed?: boolean = undefined;
  #shadow!: ShadowRoot;

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const reasonForRequest = this.getAttribute("data-reason-for-request");
    const permissionName: Permissions | null = this.getAttribute(
      "data-name",
    ) as Permissions;

    if (!permissionName) {
      throw new Error(
        "data-name attribute is required on permission-item element.",
      );
    }

    this.#permissionName = permissionName;
    this.#shadow = shadow;

    await this.getPermissionStatus();

    this.render();

    // there may need to be another component or feature to trigger with the user
    // tries to activate something that requires permissions.
    shadow.querySelector(".permission-grant")?.addEventListener("click", () => {
      this.grantPermission(permissionName);
    });
  }

  async grantPermission(string: Permissions) {
    const result = await getPermissionQuery(string)();

    this.#isAllowed = result.allowed;

    await this.getPermissionStatus();
  }

  async getPermissionStatus() {
    const permissionStatus = await navigator.permissions.query({
      name: (this.#permissionName ?? "") as PermissionName,
    });

    if (permissionStatus.state === "granted") {
      this.#isAllowed = true;
    } else if (permissionStatus.state === "denied") {
      this.#isAllowed = false;
    }

    this.render();
  }

  render() {
    this.#shadow.innerHTML = template(
      this.#permissionName ?? "",
      this.#isAllowed,
    );
  }
}
