import { AddressApiModel } from '../address.api.model';
import { StationListItemApiModel, StationPublicDetailApiModel } from '../stations/station.api.model';
import { IsoDateTime } from '../users/shared.api.model';
/** HTTP header required on GET /api/fleet/stations*. */
export declare const FLEET_ID_HEADER = "X-Fleet-Id";
/** GET /api/fleet/stations — list row for fleet mobile app. */
export interface FleetStationListItemApiModel extends StationListItemApiModel {
    address: AddressApiModel;
}
/** GET /api/fleet/stations/:stationId — fleet station detail. */
export interface FleetStationDetailApiModel extends StationPublicDetailApiModel {
    createdAt: IsoDateTime;
    updatedAt: IsoDateTime;
}
//# sourceMappingURL=fleet-station.api.model.d.ts.map