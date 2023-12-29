export interface PermissionsResponse {
  name: string;
  allowed: boolean;
}

export enum Browser {
  Firefox = "Firefox",
  Chromium = "Chromium",
  WebKit = "WebKit",
  Unknown = "Unknown",
}

// defined here https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10
export const FirefoxPermissions = [
  "geolocation",
  "notifications",
  "push",
  "persistent-storage",
  "midi",
  "storage-access", // Defined in https://privacycg.github.io/storage-access/#permissions-integration
  "screen-wake-lock"
] as const;

// defined here https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl
export const ChromiumPermissions = [
  "geolocation",
  "notifications",
  "push",
  "midi",
  "camera",
  "microphone",
  // "speaker",
  // "device-info",
  "background-fetch",
  "background-sync",
  // "bluetooth",
  "persistent-storage",
  "ambient-light-sensor",
  "accelerometer",
  "gyroscope",
  "magnetometer",
  // "clipboard",
  "screen-wake-lock",
  "nfc",
  "display-capture",
  "accessibility-events",
  "clipboard-read",
  "clipboard-write",
  "payment-handler",
  "idle-detection",
  "periodic-background-sync",
  "system-wake-lock",
  "storage-access",
  "window-management",
  "window-placement",
  "local-fonts",
  "top-level-storage-access",
  "captured-surface-control",
] as const;

// defined here https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl
export const WebKitPermissions = [
  "accelerometer",
  "background-fetch",
  "bluetooth",
  "camera",
  "display-capture",
  "geolocation",
  "gyroscope",
  "magnetometer",
  "microphone",
  "midi",
  "nfc",
  "notifications",
  "push",
  "screen-wake-lock",
  "speaker-selection"
] as const;

const dedupe = (arr: string[]) => [...new Set(arr)];
const allPermissions = dedupe([
  ...FirefoxPermissions,
  ...ChromiumPermissions,
  ...WebKitPermissions,
]);

export type Permissions = typeof allPermissions[number];
