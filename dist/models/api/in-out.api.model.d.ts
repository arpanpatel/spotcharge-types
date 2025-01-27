import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { InOutKeys, VehiclePurposeDetailType } from "../../consts";
import { FleetModel } from "../fleet.model";
import { FleetVehicleModel } from "../fleet-vehicle.model";
import { FranchiseModel } from "../franchise.model";
import { AssetModel } from "./asset-api.model";
export type VehicleStatus = "IN" | "OUT";
export interface VehicleChecklist {
    auxiliaryBattery: boolean;
    fireExtinguisher: boolean;
    spareWheel: boolean;
    hydraulicJack: boolean;
    rightSideMirror: boolean;
    leftSideMirror: boolean;
    vehicleKey: boolean;
}
export interface InOutApiModel {
    id: string;
    fleet: FleetModel;
    franchise: FranchiseModel;
    asset: AssetModel;
    vehicle: FleetVehicleModel;
    driver: string | null;
    status: VehicleStatus;
    batteryPercentage: number;
    odometer: number;
    inOutType: InOutKeys;
    purpose: VehiclePurposeDetailType;
    checklistStatus: VehicleChecklist;
    previousInOutId?: string;
    isChecklistChanged: boolean;
    missingChecklistItems?: string[];
    newlyAddedCheckListItems?: string[];
    photoEvidence: PhotoEvidenceModel[];
    profileImage: PhotoEvidenceModel;
    notes: string | null;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
export interface PhotoEvidenceModel {
    imageUrl: string;
    title: string;
    exif: any | null;
}
export interface LastInOutModel {
    status: VehicleStatus;
    createdBy: CreatedByModel;
    timeStamp: Timestamp;
    driver: string;
    fleet: FleetModel;
    franchise: FranchiseModel;
}
//# sourceMappingURL=in-out.api.model.d.ts.map