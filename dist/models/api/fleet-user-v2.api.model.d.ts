import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { UserRoleApiModel } from "./user-role.api.model";
export interface FleetUserV2ApiModel {
    id: string;
    userId: string;
    role: Pick<UserRoleApiModel, "title" | "value" | "id">;
    status: "active" | "revoked";
    timeZone: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=fleet-user-v2.api.model.d.ts.map