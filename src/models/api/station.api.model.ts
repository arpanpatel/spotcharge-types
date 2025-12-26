import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {StationStatus} from "../../enum";

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
        fleet: boolean;
        public: boolean;
        residentsOnly: boolean;
    };

    /* ---------- CHARGER COUNTS (DERIVED, REQUIRED) ---------- */
    chargerCounts: {
        total: number;
        fleet: number;
        public: number;
        residentsOnly: number;
    };
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
