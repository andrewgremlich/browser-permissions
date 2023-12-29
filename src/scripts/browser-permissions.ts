import { Browser, Permissions } from "./types";

// reference peices
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke

// TODO: make popup position configurable.
const template = (styleOverridesSrc: string | null, permissionsRequest: Permissions[]) => {
  return `
  <style>
    :host {
      position: absolute;
      bottom: 10px;
      right: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      z-index: 100000;
    }

    .browser-permissions-popup-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .browser-permissions-popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      & h2 {
        margin: 0;
      }

      & button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
      }
    }
  </style>

  ${styleOverridesSrc ? `<link rel="stylesheet" href="${styleOverridesSrc}">` : ""}

  <div class="browser-permissions-popup-content">
    <div class="browser-permissions-popup-header">
      <h2 class="browser-permissions-popup-title">Permissions</h2>
      <button type="button" class="browser-permissions-popup-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
    </div>
    <div class="browser-permissions-popup-body">
      <slot name="permissions-display"></slot>
      <button type="button">Grant All</button>

      ${permissionsRequest ? permissionsRequest.map((permission: Permissions) => {
    return `<request-permission data-name="${permission}"></request-permission>`;
  }).join("") : ""}
    </div>
  </div>
`}

export class BrowserPermissions extends HTMLElement {
  static observedAttributes = ['style-overrides-src'];
  static permissions: Permissions[];

  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const styleOverridesSrc = this.getAttribute("style-overrides-src");

    shadow.innerHTML = template(styleOverridesSrc, BrowserPermissions.permissions);
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
