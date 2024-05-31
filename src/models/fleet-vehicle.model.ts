import {VehicleModel} from "./vehicle.model";

export interface FleetVehicleModel {
    id: string;
    vehicle: VehicleModel;
    vehicleNumber: string;
}