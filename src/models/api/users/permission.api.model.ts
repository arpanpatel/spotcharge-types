/** Catalog sync status for GET /api/users/permissions */
export type PermissionCatalogStatus = 'missing' | 'uncategorized' | 'synced' | 'orphan';

/** GET /api/users/permissions */
export interface PermissionCatalogListItemApiModel {
  key: string;
  label: string;
  /** Label from permissionConfig when status is missing. */
  defaultLabel?: string;
  /** permission_groups.id when row exists in Postgres. */
  groupId?: string;
  groupName?: string;
  /** permission_groups.order — used for group-wise list sorting. */
  groupOrder?: number;
  /** permissions.order within the group. */
  order?: number;
  status: PermissionCatalogStatus;
}

/** GET /api/users/permissions/assignable */
export interface AssignablePermissionApiModel {
  key: string;
  label: string;
  order: number;
}

/** POST /api/users/permissions */
export interface CreatePermissionRequest {
  key: string;
  label: string;
  /** permission_groups.id (uuid). */
  groupId: string;
}

/** POST /api/users/permissions response */
export interface PermissionDetailApiModel {
  key: string;
  label: string;
  groupId: string;
  order: number;
}
