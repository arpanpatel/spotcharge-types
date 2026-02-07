import { AddressApiModel } from "./address.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { StationAccessCapability, StationStatus } from "../../enum";
import { GstModel } from "./gst-record-api.model";
export interface StationPhotoModel {
    imageUrl: string;
    isFeatured: boolean;
}
export interface StationApiModel {
    id: string;
    stationCode: string;
    name: string;
    address: AddressApiModel;
    location: {
        lat: number;
        lng: number;
    };
    gst: GstModel;
    _geo: {
        lat: number;
        lng: number;
    };
    capabilities: {
        access: StationAccessCapability[];
    };
    amenities: StationAmenities;
    photos: StationPhotoModel[];
    chargerCounts: StationChargerCounts;
    status: StationStatus;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
export interface StationChargerCounts {
    total: number;
    fleet: number;
    public: number;
    residentsOnly: number;
}
export interface StationAmenities {
    parking: boolean;
    restroom?: boolean;
    cafe?: boolean;
    waitingArea?: boolean;
    wheelchairAccessible?: boolean;
}
//# sourceMappingURL=station.api.model.d.ts.map