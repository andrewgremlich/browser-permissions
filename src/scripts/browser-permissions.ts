import { Browser } from "./types";

const template = `
  <style>
    .browser-permissions-modal {
      border: 1px solid black;
    }
  </style>

  <div class="browser-permissions-modal">
    <div class="browser-permissions-modal-content">
      <div class="browser-permissions-modal-header">
        <h2 class="browser-permissions-modal-title">Permissions</h2>
        <button type="button" class="browser-permissions-modal-close">Close</button>
      </div>
      <div class="browser-permissions-modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
`

export class BrowserPermissions extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = template;
  }

  // Use the Apple model on what permissions are requested
  usedPermissionsDisplay() {

  }

  detectBrowser(): Browser {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Firefox")) {
      return Browser.Firefox;
    } else if (userAgent.includes("Chrome") || userAgent.includes("Chromium")) {
      return Browser.Chromium;
    } else if (userAgent.includes("WebKit")) {
      return Browser.WebKit;
    } else {
      return Browser.Unknown;
    }
  }
}
