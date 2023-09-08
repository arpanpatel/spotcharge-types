import {ChargerLocationType, ChargerStatus, ChargerType, ConnectorStatus, PointType} from "../../enum";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";
import {AddressApiModel} from "./address.api.model";


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
}

export interface ConnectorModel {
    name: string;
    status: ConnectorStatus;
    capacity: number;
    unitRate: number;
}
