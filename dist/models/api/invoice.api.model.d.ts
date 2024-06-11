import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { OrderType } from "../../enum";
import { ChargingTransactionRecords } from "../charging-transaction";
import { ServiceChargeModel } from "../service-charge.model";
export interface InvoiceApiModel {
    id: string;
    invoiceId: string;
    bookingId: string;
    invoiceNo: number;
    chargerId: string;
    customerName: string;
    chargingDate: Timestamp;
    startTime: Timestamp;
    endTime: Timestamp;
    unitConsumed: number;
    state: string;
    connectorNo: number;
    userId: string;
    unitRate: number;
    orderType: OrderType;
    stopReason: string;
    transactionId: number;
    currentTransactionId: number;
    transaction: ChargingTransactionRecords;
    meterStart: number;
    meterStop: number;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    serviceChargeInfo: ServiceChargeModel;
    serviceCharge: number;
    taxAmount: number;
}
//# sourceMappingURL=invoice.api.model.d.ts.map