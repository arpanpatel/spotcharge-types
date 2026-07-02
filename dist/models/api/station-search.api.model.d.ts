import { AddressApiModel } from "./address.api.model";
import { StationAmenities } from "./station.api.model";
import { GstModel } from "./gst-record-api.model";
import { StationSearchSource } from "../../enum";
/** Meilisearch document format for the shared `stations` index. */
export interface StationSearchApiModel {
    id: string;
    name: string;
    stationCode: string;
    status: string;
    address?: AddressApiModel;
    amenities?: StationAmenities;
    gst?: GstModel | null;
    _geo?: {
        lat: number;
        lng: number;
    } | null;
    capabilitiesAccess?: string[];
    createdAt?: number;
    updatedAt?: number;
    businessUnitId?: string | null;
    companyId?: string | null;
    source?: StationSearchSource;
    isRoaming?: boolean;
    ownerPartyId?: string | null;
    ownerCountryCode?: string | null;
}
//# sourceMappingURL=station-search.api.model.d.ts.map