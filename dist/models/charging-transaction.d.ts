import { Timestamp } from "./timestamp";
export interface ChargingTransaction {
    unitConsumed: number;
    power: number;
    endTime: Timestamp;
    startTime: Timestamp;
    meterStop: number;
    meterStart: number;
    state: string;
}
export interface ChargingTransactionRecords {
    [transactionId: string]: ChargingTransaction;
}
//# sourceMappingURL=charging-transaction.d.ts.map