import { BrowserPermissions } from "~/browser-permissions";
import { RequestPermission } from "~/request-permission";

// reference peices
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke

/**
 * Makes the browser-permissions and request-permission web components available.
 * @param permissionsParam - { name: string, reason: string }[] Browser Permissions to request.
 */
export function makeBrowserPermissions() {
  customElements.define("browser-permissions", BrowserPermissions);
  customElements.define("request-permission", RequestPermission);
}
