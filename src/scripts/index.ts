import { BrowserPermissions } from "./browser-permissions";
import { RequestPermission } from "./permission-item";
import { getCameraPermissions } from "./permissions-helpers/helpers";
import { Permissions } from "./types";

export * from "./permissions-helpers";

// Permissions need to be done this way for typing.
const permissions: Permissions[] = ['microphone', 'camera', 'geolocation'];

export function makeBrowserPermissions(permissionsParam: Permissions[]) {
  BrowserPermissions.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissions);
  customElements.define("request-permission", RequestPermission);
}

makeBrowserPermissions(permissions);