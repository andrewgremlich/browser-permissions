import { BrowserPermissions } from "./browser-permissions";
import { RequestPermission } from "./request-permission";
import { AppPermission, Permissions } from "./types";

export * from "./permissions-helpers";

// Permissions need to be done this way for typing.
// TODO: add a "Deny" button to make the thing go away.

// TODO: I should provide a way to do it through HTML if the user wants to. Put the permissions as HTML inside browser-permissions.
// TOOD: UX to trigger all permissions at once.
// TODO: Customize browser position through attribute.
// TODO: review override style options to be easy and document it.
// TODO: Add a feature to wrap query permissions in case in order to trigger permissions
const permissions: AppPermission[] = [
  { name: "microphone", reason: "The microphone is used to record audio." },
  { name: "geolocation", reason: "The snow button at the button uses your localized forecast." }
];

/**
 * Makes the browser-permissions and request-permission web components available.
 * @param permissionsParam - { name: string, reason: string }[] Browser Permissions to request.
 */
export function makeBrowserPermissions(permissionsParam: AppPermission[]) {
  BrowserPermissions.permissions = permissionsParam;

  customElements.define("browser-permissions", BrowserPermissions);
  customElements.define("request-permission", RequestPermission);
}

makeBrowserPermissions(permissions);
