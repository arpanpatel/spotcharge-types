import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {VehicleModel} from "../vehicle.model";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";

export interface FleetVehicleApiModel {
    id: string;
    vehicle: VehicleModel;
    vehicleNumber:string;
    fleet: FleetModel;
    franchise: FranchiseModel;
    fleets: FleetModel[];
    fleetIds: string[];
    timeZone: string;
    lastInOut: any;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
