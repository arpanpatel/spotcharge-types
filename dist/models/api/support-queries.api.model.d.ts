import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface SupportQueriesApiModel {
    id: string;
    email: string;
    timeZone: string;
    appId: string;
    source: string;
    status: string;
    fullName: string;
    message: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=support-queries.api.model.d.ts.map