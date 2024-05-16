import { FleetModel } from "../fleet.model";
import { FranchiseModel } from "../franchise.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { PhoneNumberModel } from "../phone-number-model";
import { VehicleModel } from "../vehicle.model";
import { UserRoleApiModel } from "./user-role.api.model";
export interface FleetUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    franchise: FranchiseModel;
    fleets: FleetModel[];
    fleetIds: string[];
    email: string;
    password: string;
    phoneNumber: PhoneNumberModel | null;
    fleetVehicle: FleetVehicleModel;
    fleetVehicleId: string;
    roles: Pick<UserRoleApiModel, "title" | "value" | "id">;
    userId: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
    previousFleetUserId?: string;
    fleetUserFranchiseChangeLogId?: string;
}
export interface FleetVehicleModel {
    id: string;
    vehicle: VehicleModel;
    vehicleNumber: string;
}
//# sourceMappingURL=fleet-user.api.model.d.ts.map