import { Permissions, PermissionsResponse } from "../types";

export async function getCameraPermissions(): Promise<PermissionsResponse> {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  if (stream) {
    for (const track of stream.getTracks()) {
      track.stop();
    }
    return { allowed: true, name: "camera" };
  }
  return { allowed: false, name: "camera" };
}

export async function getMicrophonePermissions(): Promise<PermissionsResponse> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  if (stream) {
    for (const track of stream.getTracks()) {
      track.stop();
    }
    return { allowed: true, name: "microphone" };
  }
  return { allowed: false, name: "microphone" };
}

export async function getScreenCapturePermissions(): Promise<PermissionsResponse> {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  if (stream) {
    for (const track of stream.getTracks()) {
      track.stop();
    }
    return { allowed: true, name: "screen-capture" };
  }
  return { allowed: false, name: "screen-capture" };
}

export async function getNotificationPermissions(): Promise<PermissionsResponse> {
  const permission = await Notification.requestPermission();
  return { name: 'notifications', allowed: permission === "granted" };
}

export async function getGeolocationPermissions(): Promise<PermissionsResponse> {
  const permission = await navigator.permissions.query({
    name: "geolocation",
  });
  return { name: 'geolocation', allowed: permission.state === "granted" };
}

export async function getPersistentStoragePermissions(): Promise<PermissionsResponse> {
  const permission = await navigator.permissions.query({
    name: "persistent-storage",
  });
  return { name: 'geolocation', allowed: permission.state === "granted" };
}

export async function getClipboardPermissions(): Promise<PermissionsResponse> {
  const permission = await navigator.permissions.query({
    name: "clipboard-read" as PermissionName,
  });
  return { name: 'clipboard', allowed: permission.state === "granted" };
}

export async function getMidiPermissions(): Promise<PermissionsResponse> {
  const permission = await navigator.permissions.query({ name: "midi" as PermissionName });
  return { name: 'midi', allowed: permission.state === "granted" };
}

export const getPermissionQuery = (permissionName: Permissions): () => Promise<PermissionsResponse> => {
  const permissionSet: Record<Permissions, () => Promise<PermissionsResponse>> = {
    camera: getCameraPermissions,
    microphone: getMicrophonePermissions,
    notifications: getNotificationPermissions,
    geolocation: getGeolocationPermissions,
    midi: getMidiPermissions,
    "clipboard-read": getClipboardPermissions,
    push: () => Promise.resolve({ name: 'push', allowed: false, error: 'Not implemented' }),
    'background-fetch': () => Promise.resolve({ name: 'background-fetch', allowed: false, error: 'Not implemented' }),
    'background-sync': () => Promise.resolve({ name: 'background-sync', allowed: false, error: 'Not implemented' }),
    'persistent-storage': getPersistentStoragePermissions,
    accelerometer: () => Promise.resolve({ name: 'accelerometer', allowed: false, error: 'Not implemented' }),
    gyroscope: () => Promise.resolve({ name: 'gyroscope', allowed: false, error: 'Not implemented' }),
    magnetometer: () => Promise.resolve({ name: 'magnetometer', allowed: false, error: 'Not implemented' }),
    'screen-wake-lock': () => Promise.resolve({ name: 'screen-wake-lock', allowed: false, error: 'Not implemented' }),
    nfc: () => Promise.resolve({ name: 'nfc', allowed: false, error: 'Not implemented' }),
    'display-capture': getScreenCapturePermissions,
    'accessibility-events': () => Promise.resolve({ name: 'accessibility-events', allowed: false, error: 'Not implemented' }),
    'clipboard-write': () => Promise.resolve({ name: 'clipboard-write', allowed: false, error: 'Not implemented' }),
    'payment-handler': () => Promise.resolve({ name: 'payment-handler', allowed: false, error: 'Not implemented' }),
    'idle-detection': () => Promise.resolve({ name: 'idle-detection', allowed: false, error: 'Not implemented' }),
    'periodic-background-sync': () => Promise.resolve({ name: 'periodic-background-sync', allowed: false, error: 'Not implemented' }),
    'system-wake-lock': () => Promise.resolve({ name: 'system-wake-lock', allowed: false, error: 'Not implemented' }),
    'storage-access': () => Promise.resolve({ name: 'storage-access', allowed: false, error: 'Not implemented' }),
    'window-management': () => Promise.resolve({ name: 'window-management', allowed: false, error: 'Not implemented' }),
    'window-placement': () => Promise.resolve({ name: 'window-placement', allowed: false, error: 'Not implemented' }),
    'local-fonts': () => Promise.resolve({ name: 'local-fonts', allowed: false, error: 'Not implemented' }),
    'top-level-storage-access': () => Promise.resolve({ name: 'top-level-storage-access', allowed: false, error: 'Not implemented' }),
    'captured-surface-control': () => Promise.resolve({ name: 'captured-surface-control', allowed: false, error: 'Not implemented' }),
    'speaker-selection': () => Promise.resolve({ name: 'speaker-selection', allowed: false, error: 'Not implemented' }),
    'ambient-light-sensor': () => Promise.resolve({ name: 'ambient-light-sensor', allowed: false, error: 'Not implemented' }),
    bluetooth: () => Promise.resolve({ name: 'bluetooth', allowed: false, error: 'Not implemented' }),
  };

  return permissionSet[permissionName];
}