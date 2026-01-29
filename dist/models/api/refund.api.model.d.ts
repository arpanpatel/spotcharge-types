import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentEntityType, RefundStatus, RefundReason, RefundDestination } from "../../enum";
/**
 * Refund API Model
 *
 * Represents a refund transaction in the system.
 * Tracks refund lifecycle from initiation to completion.
 */
export interface RefundApiModel {
    id: string;
    paymentId: string;
    entityType: PaymentEntityType;
    entityId: string;
    userId: string;
    userInfo?: {
        id: string;
        name: string;
    };
    requestedAmount: number;
    refundedAmount: number;
    currency: "INR";
    reason: RefundReason;
    reasonDescription?: string;
    status: RefundStatus;
    refundTo: RefundDestination;
    providerRefundId?: string;
    providerResponse?: Record<string, unknown>;
    errorCode?: string;
    errorDescription?: string;
    bookingId?: string;
    invoiceId?: string;
    walletTransactionId?: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy?: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt?: Timestamp | null;
    isDeleted: boolean;
    source: EntityType;
    timeZone?: string;
}
//# sourceMappingURL=refund.api.model.d.ts.map