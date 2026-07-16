import { AuditActor } from '../../audit-actor.model';
import { AuditTimestampsApiModel, PermissionCatalogItemApiModel } from './shared.api.model';

/** GET /api/users/permission-groups */
export interface PermissionGroupListItemApiModel {
  /** permission_groups.id (uuid). */
  id: string;
  name: string;
  order: number;
  permissionCount: number;
  /** True for the system uncategorized catch-all group. */
  isUncategorized?: boolean;
}

/** GET /api/users/permission-groups/:id */
export interface PermissionGroupDetailApiModel
  extends PermissionGroupListItemApiModel,
    AuditTimestampsApiModel {
  permissions: Record<string, PermissionCatalogItemApiModel>;
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

/** PATCH /api/users/permission-groups/:id */
export interface UpdatePermissionGroupRequest {
  name?: string;
  order?: number;
  /** Replaces permissions assigned to this group (keys must exist in catalog). */
  permissionKeys?: string[];
}

/** POST /api/users/permission-groups */
export interface CreatePermissionGroupRequest {
  name: string;
  order?: number;
  /** Permission keys to assign to the new group (must not belong to another group). */
  permissionKeys?: string[];
}
