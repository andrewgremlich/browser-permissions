import { PermissionsResponse } from "../types";

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
    return { allowed: true, name: "display-capture" };
  }
  return { allowed: false, name: "display-capture" };
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
  return { name: 'clipboard-read', allowed: permission.state === "granted" };
}

export async function getMidiPermissions(): Promise<PermissionsResponse> {
  const permission = await navigator.permissions.query({ name: "midi" as PermissionName });
  return { name: 'midi', allowed: permission.state === "granted" };
}