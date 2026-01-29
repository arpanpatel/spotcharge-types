import { PaymentMethod, PaymentProvider } from "../enum";

/**
 * Generic payment info for bookings
 * Provider-agnostic structure that can work with any payment gateway
 */
export interface BookingPaymentInfo {
  // Payment method used
  method: PaymentMethod;

  // Provider details (optional - not present for wallet-only payments)
  provider?: PaymentProvider;
  providerOrderId?: string;
  providerPaymentId?: string;
  providerSignature?: string;

  // Amount breakdown
  walletAmount: number;
  topUpAmount: number;
}
