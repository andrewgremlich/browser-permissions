import { BrowserPermissionsComponent } from "./browser-permissions";

export * from "./permissions-helpers";

const permissions = ['microphone', 'camera', 'geolocation', 'notifications', 'push', 'midi', 'screen-wake-lock']

export function BrowserPermissions(permissionsParam: string[]) {
  BrowserPermissionsComponent.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissionsComponent);
}

BrowserPermissions(permissions);