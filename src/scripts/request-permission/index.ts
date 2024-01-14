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

  #isAllowed?: boolean = undefined;
  #localStorageOverride!: boolean;
  #permissionName!: Permissions;
  #permissionTrigger!: HTMLButtonElement | null | undefined;

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  async connectedCallback() {
    this.attachShadow({ mode: "open" });

    const permissionState = await this.getPermissionState();

    if (!localStorage[`${this.#permissionName}-deny`]) {
      localStorage[`${this.#permissionName}-deny`] = false;
    } else {
      this.#localStorageOverride =
        localStorage[`${this.#permissionName}-deny`] === "true";
    }

    this.#isAllowed = this.#localStorageOverride
      ? !this.#localStorageOverride
      : permissionState.allowed;

    if (this.#isAllowed) {
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

    this.#permissionTrigger = this.shadowRoot?.querySelector(
      ".permission-trigger",
    );

    this.#permissionTrigger?.addEventListener("click", () =>
      this.triggerPermission(this.#permissionName),
    );

    this.shadowRoot
      ?.querySelector(".permission-deny")
      ?.addEventListener("click", () => {
        console.log("hide the permission request!");
        this.deactivate();
      });
  }

  async getPermissionState() {
    const permissionName: Permissions | null = this.getAttribute(
      "permission-name",
    ) as Permissions;

    if (!permissionName) {
      throw new Error(
        "'permission-name' attribute is required on permission-item element.",
      );
    }

    this.#permissionName = permissionName;

    return await getPermissionsState(permissionName)();
  }

  activate() {
    setTimeout(() => {
      this.shadowRoot
        ?.querySelector(".request-permission")
        ?.classList.add("fade-in");
    }, Math.random() * 1000);
  }

  deactivate() {
    localStorage[`${this.#permissionName}-deny`] = this.#isAllowed
      ? false
      : true;

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
      this.#permissionTrigger.innerHTML = Check;
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
