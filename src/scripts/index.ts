import { BrowserPermissions } from "~/browser-permissions";
import { RequestPermission } from "~/request-permission";
import { AppPermission } from "~/types";
export * from "~/permissions-helpers";

// reference peices
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke

const permissions: AppPermission[] = [
  { name: "microphone", reason: "The microphone is used to record a song." },
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
