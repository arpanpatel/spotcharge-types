import { FleetStationVisibilityStatus } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import {Timestamp} from "../timestamp";


export interface FleetStationVisibilityApiModel {
    id: string;
    fleetId: string;
    stationId: string;
    status: FleetStationVisibilityStatus;
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
