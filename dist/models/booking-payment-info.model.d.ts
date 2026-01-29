import { PaymentMethod, PaymentProvider } from "../enum";
/**
 * Generic payment info for bookings
 * Provider-agnostic structure that can work with any payment gateway
 */
export interface BookingPaymentInfo {
    method: PaymentMethod;
    provider?: PaymentProvider;
    providerOrderId?: string;
    providerPaymentId?: string;
    providerSignature?: string;
    walletAmount: number;
    topUpAmount: number;
}
//# sourceMappingURL=booking-payment-info.model.d.ts.map