import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { VehicleModel } from "../vehicle.model";
export interface FleetVehicleApiModel {
    id: string;
    vehicle: VehicleModel;
    vehicleNumber: string;
    timeZone: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=fleet-vehicle.api.model.d.ts.map