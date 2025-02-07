import {Timestamp} from "./timestamp";

export interface ChargingTransaction {
    unitConsumed: number;
    power: number;
    endTime: Timestamp;
    startTime: Timestamp;
    meterStop: number;
    meterStart: number;
    state: string;
    highestAmpere?: number;
    ampere?: number;
}

export interface ChargingTransactionRecords {
    [transactionId: string]: ChargingTransaction;
}
