import { ChargerLocationType, PointType } from "../../enum";
import { FleetModel } from "../fleet.model";
import { FranchiseModel } from "../franchise.model";
import { AddressApiModel } from "./address.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { ConnectorModel } from "../connector.model";
import { VendorModel } from "../vendor.model";
export interface FleetChargerApiModel {
    /** Postgres `infrastructure.chargers.id` (UUID). */
    id: string;
    name: string;
    /** OCPP charge point identity. */
    chargePointId: string;
    /** @deprecated Use `chargePointId`. */
    chargerId?: string;
    franchise: FranchiseModel;
    pointType: PointType;
    location: AddressApiModel;
    connectors: Array<ConnectorModel>;
    occpProtocol: string;
    chargerLocationType: ChargerLocationType;
    /** @deprecated Grid COGS is on the parent station (`gridPurchaseRatePerKwh`). */
    purchaseRate?: number;
    active: boolean;
    vendor: VendorModel;
    fleet?: FleetModel;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=fleet-charger.api.model.d.ts.map