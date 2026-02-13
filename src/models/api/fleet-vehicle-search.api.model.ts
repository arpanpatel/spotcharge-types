import {VehicleModel} from "../vehicle.model";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";

/**
 * Meilisearch document format for FleetVehicle search index
 */
export interface FleetVehicleSearchApiModel {
    id: string;
    vehicleNumber: string;
    vehicle: VehicleModel;
    franchise: FranchiseModel;
    fleets: FleetModel[];
    fleetIds: string[];
    inOutStatus: string;
    isRegistered: boolean;
    isDeleted: boolean;
    createdAt?: number;
    updatedAt?: number;
}
