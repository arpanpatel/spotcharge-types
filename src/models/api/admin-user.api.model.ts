import {PhoneNumberModel} from "../phone-number-model";
import {UserRoleApiModel} from "./user-role.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";

export interface AdminUserApiModel {
    id: string;
    username: string;
    userId: string;
    email: string;
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