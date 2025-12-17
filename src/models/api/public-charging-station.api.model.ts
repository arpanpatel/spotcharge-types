import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";

export interface PublicChargingStationApiModel {
    id: string;
    _firestore_id?: string;
    name: string;
    location: AddressApiModel;
    _geo: {
        lat: number;
        lng: number;
    };
    chargers: string[];
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
