import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { RateDuration } from "../rate-duration.model";
export interface TariffServiceCharge {
    rate: number;
    rateDuration: RateDuration;
}
export interface TariffApiModel {
    id: string;
    name: string;
    description?: string;
    energyRate: number;
    serviceCharge?: TariffServiceCharge | null;
    validFrom: Timestamp;
    validTo: Timestamp | null;
    isActive: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
}
//# sourceMappingURL=tariff.api.model.d.ts.map