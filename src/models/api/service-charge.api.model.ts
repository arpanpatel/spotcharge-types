import {CreatedByModel} from "../created-by.model";
import {RateDuration} from "../rate-duration.model";
import {Timestamp} from "../timestamp";

export interface ServiceChargeApiModel {
    id: string;
    name: string;
    rate: number;
    rateDuration: RateDuration;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}




