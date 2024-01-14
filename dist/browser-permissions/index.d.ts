import { AppPermission } from '../types';
/**
 * @attribute style-overrides-src - The URL to a stylesheet to override the default styles.
 * @type {string}
 * @attribute browser-position - The position of the browser. Defaults to "bottom-right".
 * @type {string}
 */
export declare class BrowserPermissions extends HTMLElement {
    permissions: AppPermission[];
    constructor();
    connectedCallback(): void;
    errorCheck(): void;
}
