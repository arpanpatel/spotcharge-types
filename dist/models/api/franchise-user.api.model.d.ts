import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface FranchiseUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=franchise-user.api.model.d.ts.map