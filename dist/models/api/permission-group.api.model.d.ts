import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { Permission, PermissionKeys } from "../../consts";
export interface PermissionGroupApiModel {
    id: string;
    name: string;
    order: number;
    permissions: Record<PermissionKeys, Permission>;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=permission-group.api.model.d.ts.map