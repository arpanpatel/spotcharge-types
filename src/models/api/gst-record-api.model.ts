import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {EntityType} from "../../enum";
import {StateModel} from "./address.api.model";

export interface GstRecordApiModel {
    id: string;
    gstNumber: string;
    interTax: StateTaxModel;
    intraTax: StateTaxModel;
    businessLegalName: string;
    state: StateModel;
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
    taxPercentages: TaxWithPercentageModel[]
}

export interface TaxWithPercentageModel {
    id: string;
    name: string;
    percentage: number;
    type: string;
}

export interface GstModel {
    id: string;
    businessLegalName: string;
    gstNumber: string;
    gstState: string;
}