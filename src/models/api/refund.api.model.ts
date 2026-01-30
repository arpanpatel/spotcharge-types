import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { 
  EntityType, 
  PaymentEntityType, 
  RefundStatus, 
  RefundReason, 
  RefundDestination, 
  PaymentProvider
} from "../../enum";

/**
 * Refund API Model
 * 
 * Represents a refund transaction in the system.
 * Tracks refund lifecycle from initiation to completion.
 */
export interface RefundApiModel {
  id: string;

  /** Link to original payment (if external money involved) */
  paymentId?: string;

  entityType: PaymentEntityType;
  entityId: string; // bookingId or walletTopupId

  userId: string;
  userInfo?: {
    id: string;
    name: string;
  };

  /** Amount refunded in THIS refund event */
  amount: number;
  currency: "INR";

  /** Why refund happened */
  reason: RefundReason;
  reasonDescription?: string;

  /** Where money went */
  refundTo: RefundDestination;

  /** Lifecycle (async only for bank refunds) */
  status: RefundStatus;

  /** Provider details (only for bank refunds) */
  provider?: PaymentProvider;
  providerRefundId?: string;
  providerResponse?: Record<string, unknown>;

  errorCode?: string;
  errorDescription?: string;

  /** Related entities */
  bookingId: string | null;
  invoiceId: string | null;
  walletTransactionId: string | null;

  /** Who triggered this refund */
  triggeredBy: EntityType; // system | admin | superAdmin

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
