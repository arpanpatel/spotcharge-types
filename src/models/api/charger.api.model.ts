import {ChargerAllowedMode, ChargerOperationalState, ChargerPhysicalState, ChargerStatus, ChargerType, PointType} from "../../enum";
import {AddressApiModel} from "./address.api.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {ConnectorModel} from "../connector.model";
import {VendorModel} from "../vendor.model";
import {GstModel} from "./gst-record-api.model";

export interface ChargerApiModel {
    id: string;
    _firestore_id: string;
    stationId: string;
    name: string;
    chargerId: string;
    connectorCount: number;
    chargerPhysicalState: ChargerPhysicalState;
    chargerOperationalState: ChargerOperationalState;
    type: ChargerType;
    location: AddressApiModel;
    connectors: Record<string, ConnectorModel>;
    gst: GstModel;
    protocol: string;
    allowedModes: ChargerAllowedMode[];
    accessNote?: string;
    purchaseRate: number;
    isServiceChargeApplicable: boolean;
    vendor: VendorModel;
    status: ChargerStatus;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    _geo: {
        lat: number;
        lng: number;
    };
    _geoDistance: number;

    lastChargeAt?: Timestamp;

    fleetIds?: string[];
    lastSeen?: Timestamp;
    onlineAt?: Timestamp;
    firmwareVersion?: string;
}


