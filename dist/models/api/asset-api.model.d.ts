import { LastInOutModel, PhotoEvidenceModel } from "./in-out.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { FleetModel } from "../fleet.model";
import { FranchiseModel } from "../franchise.model";
export interface AssetApiModel {
    id: string;
    name: string;
    type: AssetType;
    status: string;
    identificationNumber: string;
    fleet: FleetModel;
    franchise: FranchiseModel;
    lastIn: LastInOutModel;
    lastOut: LastInOutModel;
    photo?: PhotoEvidenceModel;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
export interface AssetType {
    id: string;
    name: string;
}
export interface AssetModel {
    id: string;
    name: string;
    status: string;
    type: AssetType;
    identificationNumber: string;
}
//# sourceMappingURL=asset-api.model.d.ts.map