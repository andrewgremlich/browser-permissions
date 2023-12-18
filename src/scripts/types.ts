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
const FirefoxPermissions = [
  "geolocation",
  "notifications",
  "push",
  "persistent-storage",
  "midi",
  "storage-access", // Defined in https://privacycg.github.io/storage-access/#permissions-integration
  "screen-wake-lock"
];

// defined here https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl
const ChromiumPermissions = [
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
  // Non-standard:
  "accessibility-events",
  "clipboard-read",
  "clipboard-write",
  "payment-handler",
  "idle-detection",
  "periodic-background-sync",
  "system-wake-lock",
  "storage-access",
  "window-management",
  // Alias for 'window-management' (crbug.com/1328581).
  "window-placement",
  "local-fonts",
  "top-level-storage-access",
  "captured-surface-control",
]

// defined here https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl
const WebKitPermissions = [
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
]

const permissionsSet = new Set([...FirefoxPermissions, ...ChromiumPermissions, ...WebKitPermissions]);
const PermissionsEnum = ([...permissionsSet]) as const;

export type Permissions = typeof PermissionsEnum[number];
