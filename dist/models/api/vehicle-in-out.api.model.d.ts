import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { VehiclePurposeType } from "../../consts";
export type VehicleStatus = "IN" | "OUT";
export interface VehicleChecklist {
    batteryChecked: boolean;
    tirePressureChecked: boolean;
    brakesChecked: boolean;
    lightsChecked: boolean;
    externalDamageReported: boolean;
}
export interface VehicleInOutApiModel {
    fleetId: string;
    vehicleId: string;
    driverId: string | null;
    status: VehicleStatus;
    batteryPercentage: number;
    purpose: VehiclePurposeType;
    checklistStatus: VehicleChecklist;
    photoEvidence: string[];
    notes: string | null;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=vehicle-in-out.api.model.d.ts.map