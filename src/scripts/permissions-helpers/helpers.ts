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
    return { allowed: true, name: "display-capture" };
  }
  return { allowed: false, name: "display-capture" };
}

export async function getGeolocationPermissions(): Promise<PermissionsResponse> {
  await navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
  }, (error) => {
    console.log(error);
  });

  return { allowed: true, name: "geolocation" };
}

export async function getNotificationPermissions(): Promise<PermissionsResponse> {
  const permission = await Notification.requestPermission();
  return { name: "notifications", allowed: permission === "granted" };
}

export const getPermissionsState =
  (name: Permissions) => async (): Promise<PermissionsResponse> => {
    const permission = await navigator.permissions.query({
      name: name as PermissionName,
    });

    return { name, allowed: permission.state === "granted" };
  };
