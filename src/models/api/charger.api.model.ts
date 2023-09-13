import {ChargerLocationType, ChargerType, PointType} from "../../enum";
import {FranchiseModel} from "../franchise.model";
import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {ConnectorModel} from "../connector.model";


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
    purchaseRate: number;
    active: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
