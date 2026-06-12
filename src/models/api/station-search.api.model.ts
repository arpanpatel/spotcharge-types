import {AddressApiModel} from "./address.api.model";
import {StationAmenities} from "./station.api.model";
import {GstModel} from "./gst-record-api.model";

/**
 * Meilisearch document format for Station search index
 */
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
    /**
     * Origin of the station document.
     * - 'owned': a SpotCharge-operated station (default).
     * - 'ocpi': a partner CPO location mirrored via OCPI roaming.
     */
    source?: StationSearchSource;
    /** True when this is a roaming (partner) location. */
    isRoaming?: boolean;
    /** Owning CPO party id (OCPI), present only when source = 'ocpi'. */
    ownerPartyId?: string | null;
    /** Owning CPO country code (OCPI), present only when source = 'ocpi'. */
    ownerCountryCode?: string | null;
}

export type StationSearchSource = 'owned' | 'ocpi';
