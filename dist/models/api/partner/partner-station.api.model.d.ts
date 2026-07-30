import { AddressApiModel } from '../address.api.model';
import { StationListItemApiModel, StationPublicDetailApiModel } from '../stations/station.api.model';
import { IsoDateTime } from '../users/shared.api.model';
/** HTTP header required on GET /api/partner/stations* (except /api/partner/me). */
export declare const PARTNER_BUSINESS_UNIT_ACCESS_HEADER = "X-Business-Unit-Access-Id";
/** GET /api/partner/stations — list row for client portal. */
export interface PartnerStationListItemApiModel extends StationListItemApiModel {
    address: AddressApiModel;
}
/** GET /api/partner/stations/:stationId — partner station detail. */
export interface PartnerStationDetailApiModel extends StationPublicDetailApiModel {
    createdAt: IsoDateTime;
    updatedAt: IsoDateTime;
}
//# sourceMappingURL=partner-station.api.model.d.ts.map