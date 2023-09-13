import { FleetModel } from "../fleet.model";
import { FranchiseModel } from "../franchise.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { PhoneNumberModel } from "../phone-number-model";
export interface FleetUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    franchise: FranchiseModel;
    fleets: FleetModel[];
    email: string;
    password: string;
    phoneNumber: PhoneNumberModel | null;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=fleet-user.api.model.d.ts.map