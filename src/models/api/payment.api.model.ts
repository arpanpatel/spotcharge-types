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

  entityType: PaymentEntityType;
  entityId: string;

  userId: string;
  userInfo?: {
    id: string;
    name: string;
  };

  provider: PaymentProvider;
  providerOrderId: string;
  providerPaymentId?: string;

  /** External money only */
  amount: number;
  currency: "INR";

  paymentMethod: PaymentMethod;

  /** Derived from refundedAmount */
  status: PaymentTransactionStatus;

  /** Guardrail for refunds */
  refundedAmount: number;

  /** Provider raw data (never used for logic) */
  providerResponse?: Record<string, unknown>;

  errorCode?: string;
  errorDescription?: string;

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
