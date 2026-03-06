import {Timestamp} from "../timestamp";
import {CreatedByModel} from "../created-by.model";

export interface TariffApiModel {
    id: string;
    name: string;
    description?: string;

    energyRate: number;

    // References a doc in the ServiceCharges collection
    serviceChargeId?: string | null;

    isActive: boolean;

    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
}
