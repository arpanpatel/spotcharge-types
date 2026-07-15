import { AuditActor } from '../../audit-actor.model';
import { AuditTimestampsApiModel, PermissionCatalogItemApiModel } from './shared.api.model';

/** GET /api/users/permission-groups */
export interface PermissionGroupListItemApiModel {
  /** permission_groups.id (uuid). */
  id: string;
  name: string;
  order: number;
  legacyFirestoreId?: string;
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
}
