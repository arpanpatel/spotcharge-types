import { FranchiseStationAccessStatus } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import {Timestamp} from "../timestamp";


export interface FranchiseStationAccessApiModel {
    id: string;
    franchiseId: string;
    stationId: string;
    status: FranchiseStationAccessStatus;
    revokedAt?: Timestamp;
    revokedBy?: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
