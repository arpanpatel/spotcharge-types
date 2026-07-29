import { AuditActor } from '../../audit-actor.model';
import { AddressApiModel } from '../address.api.model';
import { StationAccessType, StationFacility, StationStatus } from '../../../enum';
import { StationPhotoModel } from '../station.api.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';
/** Slim GST on station read APIs (from tax.gst_records join). */
export interface StationGstSummaryApiModel {
    id: string;
    gstNumber: string;
    businessLegalName: string;
    gstState: string;
}
/** GET /api/stations/:stationId — consumer detail display. */
export interface StationPublicDetailApiModel {
    /** legacy_firestore_id in JSON (phase 1); path param also accepts Postgres station UUID. */
    id: string;
    stationCode: string;
    name: string;
    status: StationStatus;
    timeZone: string;
    address: AddressApiModel;
    facilities: StationFacility[];
    accessType: StationAccessType[];
    photos: StationPhotoModel[];
    gst: StationGstSummaryApiModel | null;
    geo: {
        lat: number;
        lng: number;
    };
}
export type StationListOrderBy = 'name' | 'stationCode' | 'createdAt' | 'status';
/** GET /api/admin/stations — list row. */
export interface StationListItemApiModel {
    id: string;
    stationCode: string;
    name: string;
    status: StationStatus;
    createdAt: IsoDateTime;
}
export interface StationListApiModel {
    rows: StationListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    orderBy: StationListOrderBy;
    sortDirection: ApiSortDirection;
}
/** GET /api/admin/stations/:stationId — path accepts Postgres UUID or legacy Firestore id. */
export interface StationAdminDetailApiModel extends StationPublicDetailApiModel, AuditTimestampsApiModel {
    legacyFirestoreId: string;
    /** Postgres `companies.id` (UUID). */
    companyId: string | null;
    businessUnitId: string | null;
    isDeleted: boolean;
    createdBy: AuditActor | null;
    updatedBy: AuditActor | null;
    deletedBy: AuditActor | null;
}
/** POST /api/admin/stations */
export interface CreateStationRequest {
    name: string;
    status: StationStatus;
    timeZone: string;
    address: AddressApiModel;
    facilities: StationFacility[];
    accessType: StationAccessType[];
    photos: StationPhotoModel[];
    gstRecordId?: string | null;
    /** Postgres `companies.id` (UUID). */
    companyId?: string | null;
    businessUnitId?: string | null;
}
/** PATCH /api/admin/stations/:stationId — stationCode is not accepted. */
export interface UpdateStationRequest {
    name?: string;
    status?: StationStatus;
    timeZone?: string;
    address?: AddressApiModel;
    facilities?: StationFacility[];
    accessType?: StationAccessType[];
    photos?: StationPhotoModel[];
    gstRecordId?: string | null;
    /** Postgres `companies.id` (UUID). */
    companyId?: string | null;
    businessUnitId?: string | null;
}
/** POST /api/admin/stations — created ids. */
export interface CreateStationResponse {
    id: string;
    stationCode: string;
}
//# sourceMappingURL=station.api.model.d.ts.map