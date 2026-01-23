export interface VehicleInfo {
    id: string;
    model: string;
    image: string;
    year: number;
    name: string;
    batteryCapacity: number;
}

export interface PublicUserVehicle extends VehicleInfo {
    registrationNo: string;
}