import { AppPermission } from "~/types";

import { template } from "./template";

/**
 * @attribute style-overrides-src - The URL to a stylesheet to override the default styles.
 * @type {string}
 * @attribute browser-position - The position of the browser. Defaults to "bottom-right".
 * @type {string}
 */
export class BrowserPermissions extends HTMLElement {
  static permissions: AppPermission[];

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = template(BrowserPermissions.permissions);
  }

  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // console.log(name, oldValue, newValue);
  // }
}
