import {ChargerLocationType, ChargerStatus} from "../../enum";
import {Timestamp} from "../timestamp";
import {CreatedByModel} from "../created-by.model";

export interface ChargerReportApiModel {
    id: string;
    chargerId: string;
    chargerName: string;
    chargerLocationType: ChargerLocationType;
    status: ChargerStatus;
    lastSeen?: Timestamp;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}