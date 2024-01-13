import { BrowserPermissions } from "~/browser-permissions";
import { RequestPermission } from "~/request-permission";
import { AppPermission, Permissions } from "~/types";
export * from "~/permissions-helpers";

// reference peices
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke


// Permissions need to be done this way for typing.
// TODO: I should provide a way to do it through HTML if the user wants to. Put the permissions as HTML inside browser-permissions.
// TOOD: UX to trigger all permissions at once.
// TODO: Customize browser position through attribute.
// TODO: Add a feature to wrap query permissions in case in order to trigger permissions


// TODO: A "privacy summary" of the webpage like what Apple does for the app store.
const permissions: AppPermission[] = [
  { name: "microphone", reason: "The microphone is used to record audio." },
  { name: "geolocation", reason: "The snow button at the button uses a localized forecast." }
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
