import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { PhoneNumberModel } from "../phone-number-model";
import { FranchiseModel } from "../franchise.model";
import { UserRoleApiModel } from "./user-role.api.model";
import { FleetModel } from "../fleet.model";
import { FleetVehicleModel } from "./fleet-user.api.model";
export interface FleetUserFranchiseChangeLogApiModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: PhoneNumberModel;
    fromFranchise: FranchiseModel;
    toFranchise: FranchiseModel;
    previousFleetUserId: string;
    currentFleetUserId: string;
    roles: Pick<UserRoleApiModel, 'title' | 'value' | 'id'>;
    userId: string;
    fleetVehicle: FleetVehicleModel;
    fleets: FleetModel[];
    fleetIds: string[];
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=fleet-user-franchise-change-log.api.model.d.ts.map