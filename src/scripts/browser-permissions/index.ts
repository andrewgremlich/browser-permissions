import { AppPermission } from "~/types";

import { template } from "./template";

/**
 * @attribute style-overrides-src - The URL to a stylesheet to override the default styles.
 * @type {string}
 * @attribute browser-position - The position of the browser. Defaults to "bottom-right".
 * @type {string}
 */
export class BrowserPermissions extends HTMLElement {
  permissions!: AppPermission[];

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    this.permissions = JSON.parse(
      this.querySelector("#browser-permission-data")?.textContent || "[]",
    );

    this.errorCheck();

    shadow.innerHTML = template(this.permissions);
  }

  errorCheck() {
    if (this.permissions.length === 0) {
      throw new Error("No permissions data provided.");
    }
  }

  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  // console.log(name, oldValue, newValue);
  // }
}
