import type { AppPermission } from "~/types";

/**
 *
 * @param styleOverridesSrc An external stylesheet to override the default styles. The stylesheet must be relative to the html file.
 * @param permissionsRequest A list of permissions to request an to render as request-permission web components.
 * @returns
 */
export const template = (permissionsRequest: AppPermission[]) => {
	return `
  <style>
    .request-reason {
      font-size: var(--r-p-reason-font-size, 12px);
      color: var(--r-p-font-color, #000);
    }
  </style>

  <div class="permissions-container">
    ${
			permissionsRequest
				? permissionsRequest
						.map(
							(permission: AppPermission) =>
								`<request-permission permission-name="${permission.name}">
      ${permission.reason ? `<p class="request-reason" slot="reason">${permission.reason}</p>` : ""}
    </request-permission>`,
						)
						.join("")
				: ""
		}
  </div>
`;
};
