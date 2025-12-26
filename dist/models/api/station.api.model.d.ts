import { AddressApiModel } from "./address.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { StationStatus } from "../../enum";
export interface StationApiModel {
    id: string;
    stationCode: string;
    name: string;
    address: AddressApiModel;
    location: {
        lat: number;
        lng: number;
    };
    capabilities: StationCapabilities;
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
export interface StationCapabilities {
    fleet: boolean;
    public: boolean;
    residentsOnly: boolean;
}
export interface StationChargerCounts {
    total: number;
    fleet: number;
    public: number;
    residentsOnly: number;
}
//# sourceMappingURL=station.api.model.d.ts.map