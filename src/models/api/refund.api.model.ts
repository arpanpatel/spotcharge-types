import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { 
  EntityType, 
  PaymentEntityType, 
  RefundStatus, 
  RefundReason, 
  RefundDestination 
} from "../../enum";

/**
 * Refund API Model
 * 
 * Represents a refund transaction in the system.
 * Tracks refund lifecycle from initiation to completion.
 */
export interface RefundApiModel {
  id: string;

  // Link to original payment
  paymentId: string;

  // What this refund is for
  entityType: PaymentEntityType;
  entityId: string;

  // User who receives the refund
  userId: string;
  userInfo?: {
    id: string;
    name: string;
  };

  // Amount details
  requestedAmount: number;
  refundedAmount: number;
  currency: "INR";

  // Refund reason
  reason: RefundReason;
  reasonDescription?: string;

  // Refund status
  status: RefundStatus;

  // Refund destination
  refundTo: RefundDestination;

  // Provider details (if refunded to source)
  providerRefundId?: string;
  providerResponse?: Record<string, unknown>;

  // Error details if refund failed
  errorCode?: string;
  errorDescription?: string;

  // Related entities
  bookingId?: string;
  invoiceId?: string;
  walletTransactionId?: string;

  // Metadata
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
