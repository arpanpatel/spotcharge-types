import { PhoneNumberModel } from "../phone-number-model";
import { UserRoleApiModel } from "./user-role.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface AdminUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    displayName?: string;
    photoURL: string | null;
    color: string;
    userId: string;
    active: boolean;
    isOwner: boolean;
    email: string;
    password: string;
    phoneNumber: PhoneNumberModel;
    roles?: Pick<UserRoleApiModel, 'title' | 'value' | 'id'>;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    updatedAt: Timestamp;
    createdAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=admin-user.api.model.d.ts.map