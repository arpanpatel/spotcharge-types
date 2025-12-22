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
    capabilities: {
        fleet: boolean;
        public: boolean;
    };
    chargerCounts: {
        total: number;
        fleet: number;
        public: number;
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
//# sourceMappingURL=station.api.model.d.ts.map