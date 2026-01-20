import {AddressApiModel} from "./address.api.model";
import {StationAmenities} from "./station.api.model";
import {GstModel} from "./gst-record-api.model";

/**
 * Meilisearch document format for Station search index
 */
export interface StationSearchApiModel {
    _firestore_id: string;
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
    createdAt?: number;
    updatedAt?: number;
}
