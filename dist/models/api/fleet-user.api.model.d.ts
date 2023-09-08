import { FleetModel } from "../fleet.model";
import { FranchiseModel } from "../franchise.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface FleetUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    franchise: FranchiseModel;
    fleets: Array<FleetModel>;
    email: string;
    password: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=fleet-user.api.model.d.ts.map