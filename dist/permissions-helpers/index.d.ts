import { Permissions, PermissionsResponse } from '../types';
export declare const getPermissionQuery: (permissionName: Permissions) => (() => Promise<PermissionsResponse>);
