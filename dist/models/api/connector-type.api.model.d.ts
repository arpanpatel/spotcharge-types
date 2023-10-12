import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface ConnectorTypeApiModel {
    id: string;
    name: string;
    icon?: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=connector-type.api.model.d.ts.map