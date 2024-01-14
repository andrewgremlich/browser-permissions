declare const FirefoxPermissions: readonly ["geolocation", "notifications", "push", "persistent-storage", "midi", "storage-access", "screen-wake-lock"];
declare const ChromiumPermissions: readonly ["geolocation", "notifications", "push", "midi", "camera", "microphone", "background-fetch", "background-sync", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "screen-wake-lock", "nfc", "display-capture", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler", "idle-detection", "periodic-background-sync", "system-wake-lock", "storage-access", "window-management", "window-placement", "local-fonts", "top-level-storage-access", "captured-surface-control"];
declare const WebKitPermissions: readonly ["accelerometer", "background-fetch", "bluetooth", "camera", "display-capture", "geolocation", "gyroscope", "magnetometer", "microphone", "midi", "nfc", "notifications", "push", "screen-wake-lock", "speaker-selection"];
declare const BrowserPositionArray: readonly ["top-left", "top-right", "bottom-left", "bottom-right"];
export type Permissions = (typeof WebKitPermissions)[number] | (typeof FirefoxPermissions)[number] | (typeof ChromiumPermissions)[number];
export type AppPermission = {
    name: Permissions;
    reason?: string;
};
export interface PermissionsResponse {
    name: Permissions;
    allowed?: boolean;
    error?: "Not implemented";
}
export type BrowserPosition = typeof BrowserPositionArray[number];
export {};
