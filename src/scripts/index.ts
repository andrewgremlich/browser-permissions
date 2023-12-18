import { BrowserPermissionsComponent } from "./browser-permissions";
import { PermissionItem } from "./permission-item";
import { Permissions } from "./types";

export * from "./permissions-helpers";

// Permissions need to be done this way for typing.
const permissions: Permissions[] = ['microphone', 'camera', 'geolocatio'];

export function BrowserPermissions(permissionsParam: string[]) {
  BrowserPermissionsComponent.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissionsComponent);

  // This could be done... but develop secondary.
  customElements.define("permission-item", PermissionItem);
}

BrowserPermissions(permissions);