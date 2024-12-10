import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import {VehiclePurposeType} from "../../consts";

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
export interface VehicleInOutApiModel {
    fleetId: string;
    vehicleId: string;
    driverId: string | null;
    status: VehicleStatus;
    batteryPercentage: number;
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