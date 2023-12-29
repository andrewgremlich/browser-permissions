import { Permissions, PermissionsResponse } from "../types";
import {
  getMidiPermissions,
  getClipboardPermissions,
  getScreenCapturePermissions,
  getCameraPermissions,
  getMicrophonePermissions,
  getNotificationPermissions,
  getGeolocationPermissions,
  getPersistentStoragePermissions,
} from "./helpers";

export const getPermissionQuery = (
  permissionName: Permissions,
): (() => Promise<PermissionsResponse>) => {
  const permissionSet: Record<Permissions, () => Promise<PermissionsResponse>> =
    {
      camera: getCameraPermissions,
      microphone: getMicrophonePermissions,
      notifications: getNotificationPermissions,
      geolocation: getGeolocationPermissions,
      midi: getMidiPermissions,
      "clipboard-read": getClipboardPermissions,
      "display-capture": getScreenCapturePermissions,
      "persistent-storage": getPersistentStoragePermissions,
      "clipboard-write": () =>
        Promise.resolve({
          name: "clipboard-write",
          allowed: false,
          error: "Not implemented",
        }),
      push: () =>
        Promise.resolve({
          name: "push",
          allowed: false,
          error: "Not implemented",
        }),
      "background-fetch": () =>
        Promise.resolve({
          name: "background-fetch",
          allowed: false,
          error: "Not implemented",
        }),
      "background-sync": () =>
        Promise.resolve({
          name: "background-sync",
          allowed: false,
          error: "Not implemented",
        }),
      accelerometer: () =>
        Promise.resolve({
          name: "accelerometer",
          allowed: false,
          error: "Not implemented",
        }),
      gyroscope: () =>
        Promise.resolve({
          name: "gyroscope",
          allowed: false,
          error: "Not implemented",
        }),
      magnetometer: () =>
        Promise.resolve({
          name: "magnetometer",
          allowed: false,
          error: "Not implemented",
        }),
      "screen-wake-lock": () =>
        Promise.resolve({
          name: "screen-wake-lock",
          allowed: false,
          error: "Not implemented",
        }),
      nfc: () =>
        Promise.resolve({
          name: "nfc",
          allowed: false,
          error: "Not implemented",
        }),
      "accessibility-events": () =>
        Promise.resolve({
          name: "accessibility-events",
          allowed: false,
          error: "Not implemented",
        }),
      "payment-handler": () =>
        Promise.resolve({
          name: "payment-handler",
          allowed: false,
          error: "Not implemented",
        }),
      "idle-detection": () =>
        Promise.resolve({
          name: "idle-detection",
          allowed: false,
          error: "Not implemented",
        }),
      "periodic-background-sync": () =>
        Promise.resolve({
          name: "periodic-background-sync",
          allowed: false,
          error: "Not implemented",
        }),
      "system-wake-lock": () =>
        Promise.resolve({
          name: "system-wake-lock",
          allowed: false,
          error: "Not implemented",
        }),
      "storage-access": () =>
        Promise.resolve({
          name: "storage-access",
          allowed: false,
          error: "Not implemented",
        }),
      "window-management": () =>
        Promise.resolve({
          name: "window-management",
          allowed: false,
          error: "Not implemented",
        }),
      "window-placement": () =>
        Promise.resolve({
          name: "window-placement",
          allowed: false,
          error: "Not implemented",
        }),
      "local-fonts": () =>
        Promise.resolve({
          name: "local-fonts",
          allowed: false,
          error: "Not implemented",
        }),
      "top-level-storage-access": () =>
        Promise.resolve({
          name: "top-level-storage-access",
          allowed: false,
          error: "Not implemented",
        }),
      "captured-surface-control": () =>
        Promise.resolve({
          name: "captured-surface-control",
          allowed: false,
          error: "Not implemented",
        }),
      "speaker-selection": () =>
        Promise.resolve({
          name: "speaker-selection",
          allowed: false,
          error: "Not implemented",
        }),
      "ambient-light-sensor": () =>
        Promise.resolve({
          name: "ambient-light-sensor",
          allowed: false,
          error: "Not implemented",
        }),
      bluetooth: () =>
        Promise.resolve({
          name: "bluetooth",
          allowed: false,
          error: "Not implemented",
        }),
    };

  return permissionSet[permissionName];
};
