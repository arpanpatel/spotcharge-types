import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";

interface TransactionData {
    [transactionId: string]: {
        unitConsumed: number;
        endTime: Date;
        startTime: Date;
        meterStop: number;
        meterStart: number;
        state: string;
    };
}

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
    currentTransactionId: number;
    transaction: TransactionData;
    connectorNo: number;
    unitConsumed: number;
    meterStart: number;
    meterStop: number;
    customerName: string;
    state: string;
    userId: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
