import {ChargerLocationType, ChargerType, PointType} from "../../enum";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";
import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {ConnectorModel} from "../connector.model";


export interface FleetChargerApiModel {
    id: string;
    name: string;
    chargerId: string;
    type: ChargerType;
    franchise: FranchiseModel;
    pointType: PointType;
    location: AddressApiModel;
    connectors: Array<ConnectorModel>;
    occpProtocol: string;
    chargerLocationType: ChargerLocationType;
    purchaseRate: number;
    active: boolean;
    fleet?: FleetModel;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}


