import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {EntityType, TaxCategory} from "../../enum";

export interface TaxApiModel {
    id: string;
    taxes: string[];
    name: string;
    percentage: number | null;
    type: TaxCategory;
    taxSpecificType: string;
    isDefault?: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    updatedAt: Timestamp;
    createdAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    deletedBy: CreatedByModel;
    source: EntityType;
}