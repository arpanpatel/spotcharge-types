import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {EntityType} from "../../enum";

export interface GstRecordApiModel {
    id: string;
    gstNumber: string;
    interState: StateTaxModel;
    intraState: StateTaxModel;
    businessLegalName: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    updatedAt: Timestamp;
    createdAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    source: EntityType;
    timeZone: string;
}

export interface StateTaxModel {
    id: string;
    name: string;
    percentage: number;
}