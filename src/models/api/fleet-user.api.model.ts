import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {PhoneNumberModel} from "../phone-number-model";
import {VehicleModel} from "../vehicle.model";

export interface FleetUserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    franchise: FranchiseModel;
    fleets: FleetModel[];
    email: string;
    password: string;
    phoneNumber: PhoneNumberModel | null;
    vehicle: VehicleModel | null;
    vehicleNumber?: string;
    userId: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
