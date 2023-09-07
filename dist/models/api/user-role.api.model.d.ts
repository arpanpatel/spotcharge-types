import { CreatedByModel } from '../created-by.model';
import { Timestamp } from "../timestamp";
export interface UserRoleApiModel {
    id: string;
    title: string;
    value: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=user-role.api.model.d.ts.map