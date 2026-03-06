import {TariffScope} from "../../enum/tariff-scope.enum";
import {Timestamp} from "../timestamp";
import {CreatedByModel} from "../created-by.model";

export interface TariffAssignmentApiModel {
    id: string;
    tariffId: string;

    scope: TariffScope;
    scopeId: string | null;           // null for global; stationId/chargerDocId/userId otherwise
    capacityId?: string | null;       // optional; references ChargerCapacity doc; null = all capacities

    priority: number;                  // auto-set: global=1, station=2, charger=3, user=5

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
