import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";
import {OrderType} from "../../enum";

export interface ChargingTransaction {
    unitConsumed: number;
    power: number;
    endTime: Date;
    startTime: Date;
    meterStop: number;
    meterStart: number;
    state: string;
}

export interface ChargingTransactionRecords {
    [transactionId: string]: ChargingTransaction;
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
    transaction: ChargingTransactionRecords;
    connectorNo: number;
    unitConsumed: number;
    meterStart: number;
    meterStop: number;
    customerName: string;
    state: string;
    userId: string;
    unitRate: number;
    orderType: OrderType;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
