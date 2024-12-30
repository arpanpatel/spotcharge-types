import { ChargerLocationType, ChargerStatus, ChargerType, PointType } from "../../enum";
import { AddressApiModel } from "./address.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { ConnectorModel } from "../connector.model";
import { VendorModel } from "../vendor.model";
import { GstModel } from "./gst-record-api.model";
export interface ChargerApiModel {
    id: string;
    _firestore_id: string;
    name: string;
    chargerId: string;
    type: ChargerType;
    pointType: PointType;
    location: AddressApiModel;
    connectors: Record<string, ConnectorModel>;
    gst: GstModel;
    protocol: string;
    chargerLocationType: ChargerLocationType;
    purchaseRate: number;
    active: boolean;
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
    fleetIds?: string[];
}
//# sourceMappingURL=charger.api.model.d.ts.map