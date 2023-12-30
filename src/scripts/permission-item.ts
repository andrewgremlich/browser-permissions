import { getPermissionIcon } from "./icons";
import { getPermissionQuery } from "./permissions-helpers";
import { Permissions } from "./types";

const template = (dataName: string) => {
  return `
  <p>Request ${dataName}? ${getPermissionIcon(dataName as Permissions)}</p>
  <button type="button" data-name"${dataName}" class="permission-grant">Grant</button>
  `;
};

export class RequestPermission extends HTMLElement {
  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const reasonForRequest = this.getAttribute("reason-for-request");

    if (!this.getAttribute("data-name")) {
      throw new Error(
        "data-name attribute is required on permission-item element.",
      );
    }

    shadow.innerHTML = template(this.getAttribute("data-name") ?? "");

    // there may need to be another component or feature to trigger with the user
    // tries to activate something that requires permissions.
    const button = shadow.querySelector(".permission-grant");

    button?.addEventListener("click", () => {
      this.grantPermission(this.getAttribute("data-name") as Permissions);
    });
  }

  grantPermission(string: Permissions) {
    // trigger browser request for permission.
    console.log("grantPermission", string);
    getPermissionQuery(string);
  }
}
