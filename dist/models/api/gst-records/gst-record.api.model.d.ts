import { AuditActor } from '../../audit-actor.model';
import { StateModel } from '../address.api.model';
import { TaxRateGroupApiModel } from '../tax-rates/tax-rate.api.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';
/** GET /api/gst-records */
export type GstRecordListOrderBy = 'gstNumber' | 'businessLegalName' | 'createdAt';
export interface GstRecordListItemApiModel {
    /** tax.gst_records.id (uuid). */
    id: string;
    gstNumber: string;
    businessLegalName: string;
    state: StateModel;
    interTax: TaxRateGroupApiModel;
    intraTax: TaxRateGroupApiModel;
    createdAt: IsoDateTime;
}
/** GET /api/gst-records — paginated list response */
export interface GstRecordListApiModel {
    rows: GstRecordListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    orderBy: GstRecordListOrderBy;
    sortDirection: ApiSortDirection;
}
/** GET /api/gst-records/:id */
export interface GstRecordDetailApiModel extends GstRecordListItemApiModel, AuditTimestampsApiModel {
    legacyFirestoreId?: string | null;
    interTax: TaxRateGroupApiModel;
    intraTax: TaxRateGroupApiModel;
    isDeleted: boolean;
    createdBy: AuditActor | null;
    updatedBy: AuditActor | null;
    deletedBy: AuditActor | null;
}
/** POST /api/gst-records */
export interface CreateGstRecordRequest {
    gstNumber: string;
    businessLegalName: string;
    state: StateModel;
    interTaxRateId: string;
    intraTaxRateId: string;
}
/** PATCH /api/gst-records/:id */
export interface UpdateGstRecordRequest {
    gstNumber?: string;
    businessLegalName?: string;
    state?: StateModel;
    interTaxRateId?: string;
    intraTaxRateId?: string;
}
/** Slim shape for tax resolution (billing). */
export type GstRecordForTaxResolution = Pick<GstRecordDetailApiModel, 'id' | 'state' | 'interTax' | 'intraTax'>;
//# sourceMappingURL=gst-record.api.model.d.ts.map