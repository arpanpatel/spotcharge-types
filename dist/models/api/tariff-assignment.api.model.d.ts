import { TariffScope } from "../../enum/tariff-scope.enum";
import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export interface TariffAssignmentApiModel {
    id: string;
    tariffId: string;
    scope: TariffScope;
    scopeId: string | null;
    outputType: 'AC' | 'DC';
    priority: number;
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
//# sourceMappingURL=tariff-assignment.api.model.d.ts.map