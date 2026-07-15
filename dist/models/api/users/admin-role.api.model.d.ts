import { PermissionKeys } from '../../../consts';
import { AuditActor } from '../../audit-actor.model';
import { UserRolePermission } from '../../user-role-permission';
import { AuditTimestampsApiModel, IsoDateTime } from './shared.api.model';
/** GET /api/users/admin-roles */
export interface AdminRoleListItemApiModel {
    /** admin_roles.id (uuid). */
    id: string;
    title: string;
    order: number;
    isDefault: boolean;
    isFullAccess: boolean;
    createdAt: IsoDateTime;
    legacyFirestoreId?: string;
}
/** GET /api/users/admin-roles/:id */
export interface AdminRoleDetailApiModel extends AdminRoleListItemApiModel, AuditTimestampsApiModel {
    permissions: Record<PermissionKeys, UserRolePermission> | null;
    isDeleted: boolean;
    createdBy: AuditActor | null;
    updatedBy: AuditActor | null;
    deletedBy: AuditActor | null;
}
/** POST /api/users/admin-roles */
export interface CreateAdminRoleRequest {
    title: string;
    order?: number;
    isDefault?: boolean;
    /** Sparse grants; omitted keys are not granted. Ignored when isFullAccess is set server-side. */
    permissionKeys?: string[];
}
/** PATCH /api/users/admin-roles/:id */
export interface UpdateAdminRoleRequest {
    title?: string;
    order?: number;
    isDefault?: boolean;
    permissionKeys?: string[];
}
//# sourceMappingURL=admin-role.api.model.d.ts.map