import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { 
  EntityType, 
  PaymentMethod, 
  PaymentEntityType, 
  PaymentProvider, 
  PaymentTransactionStatus 
} from "../../enum";

/**
 * Payment API Model
 * 
 * Represents a payment transaction in the system.
 * Tracks payment lifecycle from initiation to capture/refund.
 */
export interface PaymentApiModel {
  id: string;

  // What this payment is for
  entityType: PaymentEntityType;
  entityId: string;

  // User who made the payment
  userId: string;
  userInfo?: {
    id: string;
    name: string;
  };

  // Payment provider details
  provider: PaymentProvider;
  providerOrderId: string;
  providerPaymentId?: string;

  // Amount details
  amount: number;
  currency: "INR";
  walletAmount?: number;
  topUpAmount?: number;

  // Payment method used
  paymentMethod: PaymentMethod;

  // Payment status
  status: PaymentTransactionStatus;

  // Refund tracking
  refundedAmount: number;

  // Razorpay webhook response data
  providerResponse?: Record<string, unknown>;

  // Error details if payment failed
  errorCode?: string;
  errorDescription?: string;

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
