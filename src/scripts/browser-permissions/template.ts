import { AppPermission } from "~/types";

/**
 * 
 * @param styleOverridesSrc An external stylesheet to override the default styles. The stylesheet must be relative to the html file.
 * @param permissionsRequest A list of permissions to request an to render as request-permission web components.
 * @returns 
 */
export const template = (styleOverridesSrc: string | null, permissionsRequest: AppPermission[]) => {
  return `
  <style>
    .request-reason {
      font-size: 12px;
    }
  </style>

  ${styleOverridesSrc ? `<link rel="stylesheet" href="${styleOverridesSrc}">` : ""}

  <div class="permissions-container">
    ${permissionsRequest ? permissionsRequest.map((permission: AppPermission, index) =>
    `<request-permission permission-name="${permission.name}">
      ${permission.reason ? `<p class="request-reason" slot="reason">${permission.reason}</p>` : ""}
    </request-permission>`
  ).join("") : ""}
  </div>
`}