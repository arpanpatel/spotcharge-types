import { UserRoleStatus } from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { PhoneNumberModel } from '../../phone-number-model';
import { AdminRoleRefApiModel, AuditTimestampsApiModel, IsoDateTime } from './shared.api.model';

/** GET /api/users/admin-users */
export type AdminUserListOrderBy = 'firstName' | 'lastName' | 'email' | 'role' | 'status' | 'createdAt';
export type ApiSortDirection = 'asc' | 'desc';

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
}

/** GET /api/users/admin-users — paginated list response */
export interface AdminUserListApiModel {
  rows: AdminUserListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: AdminUserListOrderBy;
  sortDirection: ApiSortDirection;
}

/** GET /api/users/admin-users/:id */
export interface AdminUserDetailApiModel
  extends Omit<AdminUserListItemApiModel, 'phoneNumber'>,
    AuditTimestampsApiModel {
  phoneNumber?: PhoneNumberModel | null;
  phoneNumberDisplay?: string;
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

/** POST /api/users/admin-users response */
export interface CreateAdminUserResponse {
  profileId: string;
  firebaseUid: string;
  assignmentId: string;
  isNewUser: boolean;
  temporaryPassword?: string;
  email: string;
}
