import { Timestamp } from "../timestamp";
import { AppType, EntityType } from "../../enum";
import { VendorModel } from "../vendor.model";
import { CreatedByModel } from "../created-by.model";
import { AddressApiModel } from "./address.api.model";
export interface ChargerErrorApiModel {
    id: string;
    payload: ErrorPayload;
    messageId: number;
    connectorId: number;
    chargerId: string;
    chargerName: string;
    chargerLocation: AddressApiModel;
    status: string;
    source: EntityType;
    appType: AppType;
    vendor: VendorModel;
    orderIds: string[];
    resolved: boolean;
    resolvedAt: null;
    resolvedBy: null;
    reportedAt: Timestamp;
    updatedAt: Timestamp;
    createdAt: Timestamp;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
}
export interface ErrorPayload {
    status: string;
    errorCode: string;
    timestamp: Timestamp;
    connectorId: number;
    vendorErrorCode: string;
}
//# sourceMappingURL=charger-error.api.model.d.ts.map