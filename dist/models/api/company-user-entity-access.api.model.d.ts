import { CompanyUserEntityRole, CompanyUserEntityAccessStatus } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface CompanyUserEntityAccessApiModel {
    id: string;
    companyUserId: string;
    companyId: string;
    franchiseId: string;
    role: CompanyUserEntityRole;
    status: CompanyUserEntityAccessStatus;
    revokedAt?: Timestamp;
    revokedBy?: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    timeZone: string;
}
//# sourceMappingURL=company-user-entity-access.api.model.d.ts.map