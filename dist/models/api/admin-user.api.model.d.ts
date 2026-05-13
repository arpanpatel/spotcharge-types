import { UserRoleApiModel } from "./user-role.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { UserRoleStatus } from "../../enum";
export interface AdminUserApiModel {
    id: string;
    userId: string;
    roles?: Pick<UserRoleApiModel, 'title' | 'value' | 'id'>;
    status: UserRoleStatus;
    isOwner: boolean;
    timeZone: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=admin-user.api.model.d.ts.map