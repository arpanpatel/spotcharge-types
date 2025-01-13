import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import {VehiclePurposeType} from "../../consts";
import {FleetModel} from "../fleet.model";
import {FleetVehicleModel} from "../fleet-vehicle.model";
import {FranchiseModel} from "../franchise.model";
import {AssetModel} from "./asset-api.model";

// Union type for vehicle status
export type VehicleStatus = "IN" | "OUT";

// Interface for vehicle checklist status
export interface VehicleChecklist {
    batteryChecked: boolean;
    tirePressureChecked: boolean;
    brakesChecked: boolean;
    lightsChecked: boolean;
    externalDamageReported: boolean;
}

// Main interface with improved type constraints
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
    inOutType: string;
    purpose: VehiclePurposeType;
    checklistStatus: VehicleChecklist;
    previousInOutId?: string;
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

// Interface for Photo evidence
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
