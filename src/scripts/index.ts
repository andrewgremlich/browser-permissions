import { BrowserPermissions } from "./browser-permissions";
import { RequestPermission } from "./request-permission";
import { Permissions } from "./types";

export * from "./permissions-helpers";

// Permissions need to be done this way for typing.
// TODO: I should provide a way to do it through HTML if the user wants to.
// TODO: There's not really any typing for attributes on web components. Perhaps there's a way?
// TOOD: UX to trigger all permissions at once.
// TODO: Permissions policy may be set through headers... perhaps another feature
// TODO: Add a feature to wrap query permissions in case in order to trigger permissions
const permissions: Permissions[] = [
  "microphone",
  "camera",
  "geolocation"
];

export function makeBrowserPermissions(permissionsParam: Permissions[]) {
  BrowserPermissions.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissions);
  customElements.define("request-permission", RequestPermission);
}

makeBrowserPermissions(permissions);
