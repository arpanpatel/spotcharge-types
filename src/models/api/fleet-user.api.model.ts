import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {PhoneNumberModel} from "../phone-number-model";
import {VehicleModel} from "../vehicle.model";
import {UserRoleApiModel} from "./user-role.api.model";

export interface FleetUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    franchise: FranchiseModel;
    fleets: FleetModel[];
    email: string;
    password: string;
    phoneNumber: PhoneNumberModel | null;
    fleetVehicle: FleetVehicleModel;
    fleetVehicleId: string;
    // vehicle: VehicleModel | null;
    // vehicleNumber?: string;
    roles: Pick<UserRoleApiModel, "title" | "value" | "id">,
    userId: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}



export interface FleetVehicleModel {
    id: string;
    vehicle: VehicleModel;
    vehicleNumber:string;
}
