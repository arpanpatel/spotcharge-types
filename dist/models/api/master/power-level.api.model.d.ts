import { ConnectorOutputType } from '../../../enum';
import { IsoDateTime } from '../users/shared.api.model';
/** GET /api/admin/power-levels */
export interface PowerLevelListItemApiModel {
    /** master.power_levels.id (uuid). */
    id: string;
    name: string;
    outputType: ConnectorOutputType;
    /** Rated power in kW (decimal string from Postgres). */
    powerKw: string;
    sortOrder: number;
    isActive: boolean;
    createdAt: IsoDateTime;
}
/** GET /api/admin/power-levels/:id */
export interface PowerLevelDetailApiModel extends PowerLevelListItemApiModel {
    legacyFirestoreDocId: string | null;
    isDeleted: boolean;
    updatedAt: IsoDateTime;
    deletedAt: IsoDateTime | null;
    connectorReferenceCount: number;
}
/** POST /api/admin/power-levels */
export interface CreatePowerLevelRequest {
    name: string;
    outputType: ConnectorOutputType;
    powerKw: number | string;
    sortOrder?: number;
    isActive?: boolean;
}
/** PATCH /api/admin/power-levels/:id */
export interface UpdatePowerLevelRequest {
    name?: string;
    outputType?: ConnectorOutputType;
    powerKw?: number | string;
    sortOrder?: number;
    isActive?: boolean;
}
//# sourceMappingURL=power-level.api.model.d.ts.map