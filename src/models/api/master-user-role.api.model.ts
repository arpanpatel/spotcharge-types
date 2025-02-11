import {CreatedByModel} from '../created-by.model';
import {EntityType} from "../../enum";
import {Timestamp} from "../timestamp";
import {PermissionKeys} from "../../consts";
import {UserRolePermission} from "../user-role-permission";

export interface MasterUserRoleApiModel {
    id: string;
    title: string;
    value: string;
    permissions: Record<PermissionKeys, UserRolePermission> | null;
    isDefault?: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    source: EntityType;
    timeZone: string;
}
