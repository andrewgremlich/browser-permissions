import { BrowserPermissions } from "./browser-permissions";
import { RequestPermission } from "./permission-item";
import { Permissions } from "./types";

export * from "./permissions-helpers";

// Permissions need to be done this way for typing.
const permissions: Permissions[] = ['microphone', 'camera', 'geolocation'];

export function getBrowserPermissions(permissionsParam: Permissions[]) {
  BrowserPermissions.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissions);

  // This could be done... but develop secondary.
  // customElements.define("request-permission", RequestPermission);
}

getBrowserPermissions(permissions);