import { PermissionKeys } from '../consts';
import { PhoneNumberModel } from './phone-number-model';
import { RoleDescriptor } from './role-descriptor.model';
import { UserRolePermission } from './user-role-permission';
/** Logged-in superadmin operator session (from GET /api/users/me/admin). */
export interface AdminSessionModel {
    profileId: string;
    firebaseUid: string;
    assignmentId: string;
    email: string;
    firstName: string;
    lastName?: string;
    displayName?: string;
    photoURL: string | null;
    color: string;
    phoneNumber: PhoneNumberModel | null;
    roles: RoleDescriptor;
    permissions: Record<PermissionKeys, UserRolePermission> | null;
}
//# sourceMappingURL=admin-session.model.d.ts.map