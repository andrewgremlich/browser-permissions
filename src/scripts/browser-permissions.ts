import { AppPermission, Browser, Permissions } from "./types";

// reference peices
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke

// TODO: make popup position configurable.
const template = (styleOverridesSrc: string | null, permissionsRequest: AppPermission[]) => {
  return `
  <style>
    :host {
      --browser-permission-width: 200px;
      --browser-permission-height: 75px;
    }

    .request-reason {
      font-size: 12px;
    }

    request-permission {
      position: fixed;
      bottom: var(--browser-permission-height);
      height: var(--browser-permission-height);
      width: var(--browser-permission-width);

      right: -50px;
      transition: right 0.5s ease-in-out;
    }
  </style>

  ${styleOverridesSrc ? `<link rel="stylesheet" href="${styleOverridesSrc}">` : ""}

  <div class="permissions-container">
    ${permissionsRequest ? permissionsRequest.map((permission: AppPermission, index) =>
    `<request-permission permission-name="${permission.name}" style="right: ${index * -10 + 40}px; opacity: ${1 - index * 0.1}; z-index: ${1000 - index}">
      <p class="request-reason" slot="reason">${permission.reason}</p>
    </request-permission>`
  ).join("") : ""}
  </div>
`}

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
    const positionInBrowser = this.getAttribute("browser-position");

    shadow.innerHTML = template(styleOverridesSrc, BrowserPermissions.permissions);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // console.log(name, oldValue, newValue);
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
