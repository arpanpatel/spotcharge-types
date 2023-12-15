import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface BrandApiModel {
    id: string;
    name: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=brand.api.model.d.ts.map