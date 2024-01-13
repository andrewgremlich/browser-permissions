import { Check, Loading } from "~/icons";
import { getPermissionQuery } from "~/permissions-helpers";
import { getPermissionsState } from "~/permissions-helpers/helpers";
import { Permissions } from "~/types";

import { template } from "./template";

/**
 * @attribute permission-name - The name of the permission to request.
 * @type {Permissions}
 * @content reason - The reason for requesting the permission. To be displayed in the UI. Needs `slot="reason"` attribute.
 */
export class RequestPermission extends HTMLElement {
  static observedAttributes = ["permission-name"];

  #permissionName!: Permissions;
  #isAllowed?: boolean = undefined;
  #permissionTrigger!: HTMLButtonElement | null | undefined;
  #hidePermissionTrigger!: HTMLButtonElement | null | undefined;

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
    this.#hidePermissionTrigger =
      this.shadowRoot?.querySelector(".permission-deny");

    this.#permissionTrigger?.addEventListener("click", () =>
      this.triggerPermission(permissionName),
    );
    this.#hidePermissionTrigger?.addEventListener("click", () => {
      console.log("hide the permission request!");
      this.deactivate();
    });
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
      this.#permissionTrigger.innerHTML = Loading;
    } else {
      throw new Error("Permission trigger not found.");
    }
  }

  removeLoadingIndicator() {
    if (this.#permissionTrigger) {
      this.#permissionTrigger?.removeAttribute("disabled");
      this.#permissionTrigger?.classList.remove("loading");
      this.#permissionTrigger.innerText = Check;
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
