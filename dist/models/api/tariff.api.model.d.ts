import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export interface TariffApiModel {
    id: string;
    name: string;
    description?: string;
    energyRate: number;
    serviceChargeId?: string | null;
    isActive: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
}
//# sourceMappingURL=tariff.api.model.d.ts.map