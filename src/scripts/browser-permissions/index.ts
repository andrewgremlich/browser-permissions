import { AppPermission } from "~/types";

import { template } from "./template";

/**
 * @attribute style-overrides-src - The URL to a stylesheet to override the default styles.
 * @type {string}
 * @attribute browser-position - The position of the browser. Defaults to "bottom-right".
 * @type {string}
 */
export class BrowserPermissions extends HTMLElement {
  static observedAttributes = ['style-overrides-src', 'browser-position'];
  static permissions: AppPermission[];

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const styleOverridesSrc = this.getAttribute("style-overrides-src");

    // TODO: this honestly should be some kind of CSS feature...
    const positionInBrowser = this.getAttribute("browser-position");

    shadow.innerHTML = template(styleOverridesSrc, BrowserPermissions.permissions);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // console.log(name, oldValue, newValue);
  }
}
