import { PermissionKeys } from '../../../consts';
import { AuditActor } from '../../audit-actor.model';
import { UserRolePermission } from '../../user-role-permission';
import { AdminRoleRefApiModel, IsoDateTime } from './shared.api.model';

/** GET /api/users/me/admin */
export interface AdminMeApiModel {
  /** profiles.id (uuid). */
  id: string;
  firebaseUid: string;
  /** admin_assignments.id (uuid). */
  assignmentId: string;
  email: string;
  firstName: string;
  lastName?: string;
  displayName?: string;
  phoneNumber: unknown;
  photoURL: string | null;
  gender: string;
  color: string;
  emailVerified: boolean;
  isProfileComplete: boolean;
  roles: AdminRoleRefApiModel;
  permissions: Record<PermissionKeys, UserRolePermission> | null;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
  deletedAt: IsoDateTime | null;
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}
