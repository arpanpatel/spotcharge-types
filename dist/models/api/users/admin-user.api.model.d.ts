import { UserRoleStatus } from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { AdminRoleRefApiModel, AuditTimestampsApiModel, IsoDateTime } from './shared.api.model';
/** GET /api/users/admin-users */
export interface AdminUserListItemApiModel {
    /** admin_assignments.id (uuid). */
    id: string;
    /** profiles.id (uuid). */
    profileId: string;
    firebaseUid: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    roles: AdminRoleRefApiModel;
    status: UserRoleStatus;
    isOwner: boolean;
    createdAt: IsoDateTime;
    /** Optional Firestore adminUsers doc id during cutover. */
    legacyFirestoreId?: string;
}
/** GET /api/users/admin-users/:id */
export interface AdminUserDetailApiModel extends AdminUserListItemApiModel, AuditTimestampsApiModel {
    displayName?: string;
    timezone?: string;
    isDeleted: boolean;
    createdBy: AuditActor | null;
    updatedBy: AuditActor | null;
    deletedBy: AuditActor | null;
}
/** POST /api/users/admin-users — audit fields set server-side from auth token. */
export interface CreateAdminUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: unknown;
    /** admin_roles.id (uuid). */
    roleId: string;
    isOwner?: boolean;
}
/** PATCH /api/users/admin-users/:id */
export interface UpdateAdminUserRequest {
    firstName?: string;
    lastName?: string;
    phoneNumber?: unknown;
    /** admin_roles.id (uuid). */
    roleId?: string;
    status?: UserRoleStatus;
    isOwner?: boolean;
    timezone?: string;
}
//# sourceMappingURL=admin-user.api.model.d.ts.map