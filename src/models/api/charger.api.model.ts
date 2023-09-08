import {ChargerLocationType, ChargerStatus, ChargerType, ConnectorStatus, PointType} from "../../enum";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";
import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";


export interface ChargerApiModel {
    id: string;
    name: string;
    chargerId: string;
    type: ChargerType;
    franchise: FranchiseModel;
    pointType: PointType;
    location: AddressApiModel[];
    connectors: Array<ConnectorModel>;
    occpProtocol: string;
    chargerLocationType: ChargerLocationType;
    status: ChargerStatus;
    purchaseRate: number;
    fleet?: FleetModel;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}

export interface ConnectorModel {
    name: string;
    status: ConnectorStatus;
    capacity: number;
    unitRate: number;
}
