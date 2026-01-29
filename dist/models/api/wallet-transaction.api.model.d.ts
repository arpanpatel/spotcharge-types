import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { EntityType, TransactionReason, TransactionType } from "../../enum";
import { BookingPaymentInfo } from "../booking-payment-info.model";
export interface WalletTransactionApiModel {
    id: string;
    userId: string;
    amount: number;
    topUpAmount?: number | null;
    paymentInfo?: BookingPaymentInfo | null;
    closingBalance?: number;
    type: TransactionType;
    reason: TransactionReason;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy?: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    invoiceId?: string;
    bookingId?: string;
    bookingRef?: string;
    source: EntityType;
    timeZone?: string;
}
//# sourceMappingURL=wallet-transaction.api.model.d.ts.map