import { BrandModel } from "../brand.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { VehicleType } from "../../enum";
export interface VehicleApiModel {
    id: string;
    brand: BrandModel;
    model: string;
    year: number;
    batteryCapacity: number;
    image: string;
    type: VehicleType;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=vehicle.api.model.d.ts.map