import { BrowserPermissionsComponent } from "./browser-permissions";
import { PermissionItem } from "./permission-item";

export * from "./permissions-helpers";

// Permissions need to be done this way for typing.
const permissions = ['microphone', 'camera', 'geolocation', 'notifications', 'push', 'midi', 'screen-wake-lock']

export function BrowserPermissions(permissionsParam: string[]) {
  BrowserPermissionsComponent.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissionsComponent);

  // This could be done... but develop secondary.
  customElements.define("permission-item", PermissionItem);
}

BrowserPermissions(permissions);