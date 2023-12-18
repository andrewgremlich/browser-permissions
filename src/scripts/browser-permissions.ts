import { Browser } from "./types";

// reference peices
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke

// TODO: make popup configurable.
const template = (strings, styleOverridesSrc) => `
  <style>
    :host {
      position: absolute;
      bottom: 0;
      right: 0;
      border: 1px solid black;
    }
  </style>

  ${styleOverridesSrc ? `<link rel="stylesheet" href="${styleOverridesSrc}">` : ""}

  <div class="browser-permissions-popup-content">
    <div class="browser-permissions-popup-header">
      <h2 class="browser-permissions-popup-title">Permissions</h2>
      <button type="button" class="browser-permissions-popup-close">Close</button>
    </div>
    <div class="browser-permissions-popup-body">
      <slot name="permissions-display"></slot>
      <slot name="permissions-button"></slot>
    </div>
  </div>
`

export class BrowserPermissionsComponent extends HTMLElement {
  static observedAttributes = ['style-overrides-src'];
  static permissions: string[];

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const styleOverridesSrc = this.getAttribute("style-overrides-src");

    console.log(BrowserPermissionsComponent.permissions);

    shadow.innerHTML = template`${styleOverridesSrc}`;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // console.log(name, oldValue, newValue);
  }

  // Use the Apple model on what permissions are requested
  usedPermissionsDisplay() {

  }

  detectBrowser(): Browser {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Firefox")) {
      return Browser.Firefox;
    }

    if (userAgent.includes("Chrome") || userAgent.includes("Chromium")) {
      return Browser.Chromium;
    }

    if (userAgent.includes("WebKit")) {
      return Browser.WebKit;
    }

    return Browser.Unknown;
  }
}
