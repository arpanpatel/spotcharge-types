import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";

export interface OrderApiModel {
    orderId: string;
    id: string;
    chargerId: string;
    startTime: Timestamp;
    endTime: Timestamp;
    chargingDate: Timestamp;
    fleet: FleetModel;
    franchise: FranchiseModel;
    stopReason: string;
    orderNo: number;
    transactionId: number;
    connectorNo: number;
    unitConsumed: number;
    meterStart: number;
    meterStop: number;
    customerName: string;
    state: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
