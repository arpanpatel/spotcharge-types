import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";

export interface UserFavoriteStationApiModel {
    id:string; // userId_stationId
    userId:string;
    stationId:string;
    status: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}