import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { UserRoleStatus } from "../../enum";
export interface CompanyUserApiModel {
    id: string;
    companyId: string;
    userId: string;
    timeZone: string;
    status: UserRoleStatus;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=company-user.api.model.d.ts.map