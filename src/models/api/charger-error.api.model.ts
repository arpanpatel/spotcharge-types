import {Timestamp} from "../timestamp";
import {AppType} from "../../enum";
import {VendorModel} from "../vendor.model";
import {CreatedByModel} from "../created-by.model";

export interface ChargerErrorApiModel {
    id: string;
    payload: ErrorPayload;
    messageId: number;
    connectorId: number;
    chargerId: string;
    chargerName: string;
    chargerLocation: string;
    status: string;
    source: AppType;
    vendor: VendorModel;
    orderIds: string[];
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
