import { Permissions } from '../types';
/**
 * @attribute permission-name - The name of the permission to request.
 * @type {Permissions}
 * @content reason - The reason for requesting the permission. To be displayed in the UI. Needs `slot="reason"` attribute.
 */
export declare class RequestPermission extends HTMLElement {
    #private;
    static observedAttributes: string[];
    constructor();
    connectedCallback(): Promise<void>;
    getPermissionState(): Promise<import('../types').PermissionsResponse>;
    activate(): void;
    deactivate(): void;
    addLoadingIndicator(): void;
    removeLoadingIndicator(): void;
    triggerPermission(string: Permissions): Promise<void>;
}
