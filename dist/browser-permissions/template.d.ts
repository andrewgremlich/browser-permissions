import { AppPermission } from '../types';
/**
 *
 * @param styleOverridesSrc An external stylesheet to override the default styles. The stylesheet must be relative to the html file.
 * @param permissionsRequest A list of permissions to request an to render as request-permission web components.
 * @returns
 */
export declare const template: (permissionsRequest: AppPermission[]) => string;
