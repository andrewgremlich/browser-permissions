import type { Permissions, PermissionsResponse } from "~/types";

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

export function getGeolocationPermissions(): Promise<PermissionsResponse> {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			() => {
				resolve({ allowed: true, name: "geolocation" });
			},
			() => {
				reject({ allowed: false, name: "geolocation" });
			},
		);
	});
}

export async function getNotificationPermissions(): Promise<PermissionsResponse> {
	console.log("requesting notifications");
	try {
		const permission = await Notification.requestPermission();
		return { name: "notifications", allowed: permission === "granted" };
	} catch (error) {
		console.error(error);
		return { name: "notifications", allowed: false };
	}
}

export const getPermissionsState =
	(name: Permissions) => async (): Promise<PermissionsResponse> => {
		const permission = await navigator.permissions.query({
			name: name as PermissionName,
		});

		return {
			name,
			allowed:
				permission.state === "granted"
					? true
					: permission.state === "denied"
						? false
						: undefined,
		};
	};

export const getMidiAccess = async (): Promise<PermissionsResponse> => {
	try {
		await navigator.requestMIDIAccess();

		return { name: "midi", allowed: true };
	} catch (_error) {
		return { name: "midi", allowed: false };
	}
};

export async function getClipboardReadPermissions(): Promise<PermissionsResponse> {
	try {
		await navigator.clipboard.readText();
		return { allowed: true, name: "clipboard-read" };
	} catch (_error) {
		return { allowed: false, name: "clipboard-read" };
	}
}

export async function getClipboardWritePermissions(): Promise<PermissionsResponse> {
	try {
		await navigator.clipboard.writeText(
			"required string input for getting clipboard write permissions",
		);
		return { allowed: true, name: "clipboard-write" };
	} catch (_error) {
		return { allowed: false, name: "clipboard-write" };
	}
}

// https://developer.mozilla.org/en-US/docs/Web/API/Storage_API
// https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Using
export async function getStorageAccessPermissions(): Promise<PermissionsResponse> {
	try {
		await document.requestStorageAccess();
		return { allowed: true, name: "storage-access" };
	} catch (_error) {
		return { allowed: false, name: "storage-access" };
	}
}

// export const getWindowManagementPermissions: (
//   permissionName: "window-management" | "window-placement",
// ) => () => Promise<PermissionsResponse> = (permissionName) => async () => {
//   try {
//     await window.getScreenDetails();
//     return { allowed: true, name: permissionName };
//   } catch (error) {
//     return { allowed: false, name: permissionName };
//   }
// };
