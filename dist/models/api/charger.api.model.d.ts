import { ChargerAllowedMode, ChargerOperationalState, ChargerPhysicalState, ChargerStatus, PointType } from '../../enum';
import { AddressApiModel } from './address.api.model';
import { CreatedByModel } from '../created-by.model';
import { Timestamp } from '../timestamp';
import { ConnectorModel } from '../connector.model';
import { VendorModel } from '../vendor.model';
import { GstModel } from './gst-record-api.model';
/**
 * @deprecated Use slim Postgres DTOs from `./chargers/charger.api.model` (`ChargerListItemApiModel`, etc.).
 * Legacy Firestore-shaped charger document.
 */
export interface ChargerApiModel {
    /** @deprecated Postgres UUID — use `ChargerListItemApiModel.id`. */
    id: string;
    /** @deprecated Firestore doc id — removed after Postgres cutover. */
    _firestore_id: string;
    stationId: string;
    name: string;
    /** @deprecated OCPP identity — use `chargePointId` on slim DTOs. */
    chargerId: string;
    connectorCount: number;
    /** @deprecated Use `assetState`. */
    chargerPhysicalState: ChargerPhysicalState;
    /** @deprecated Use `operationalMode`. */
    chargerOperationalState: ChargerOperationalState;
    location: AddressApiModel;
    connectors: Record<string, ConnectorModel>;
    /** @deprecated GST is configured on the parent station. */
    gst?: GstModel | null;
    protocol: string;
    /** @deprecated Access is defined on the parent station via accessType. */
    allowedModes?: ChargerAllowedMode[];
    accessNote?: string;
    /** @deprecated Grid COGS moved to station `gridPurchaseRatePerKwh`. */
    purchaseRate?: number;
    isServiceChargeApplicable: boolean;
    vendor: VendorModel;
    /** @deprecated Use `connectivityStatus`. */
    status: ChargerStatus;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    /** @deprecated Join station geo when needed. */
    _geo: {
        lat: number;
        lng: number;
    };
    _geoDistance: number;
    lastChargeAt?: Timestamp;
    lastSeen?: Timestamp;
    onlineAt?: Timestamp;
    firmwareVersion?: string;
}
/** Postgres `chargePointId` + UUID identity on slim read APIs. */
export interface ChargerIdentityApiModel {
    id: string;
    chargePointId: string;
    name?: string;
    address?: string;
    pointType?: PointType;
}
//# sourceMappingURL=charger.api.model.d.ts.map