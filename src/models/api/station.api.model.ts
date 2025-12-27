import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {StationAccessCapability, StationStatus} from "../../enum";

export interface StationApiModel {
    id: string;
    stationCode: string;
    name: string;
    address: AddressApiModel;
    location: {
        lat: number;
        lng: number;
    };
    /* ---------- CAPABILITIES (DERIVED, REQUIRED) ---------- */
    capabilities: {
      access: StationAccessCapability[];
    };
    amenities: StationAmenities;

    /* ---------- CHARGER COUNTS (DERIVED, REQUIRED) ---------- */
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