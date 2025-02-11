import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { EntityType } from "../../enum";
import { UserRolePermission } from "../user-role-permission";
import { PermissionKeys } from "../../consts";
export interface UserRoleApiModel {
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
//# sourceMappingURL=user-role.api.model.d.ts.map