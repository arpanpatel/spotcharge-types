export interface RazorpaySuccessResponse {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}
export interface Metadata {
    payment_id: string;
    order_id: string;
}
export interface RazorpayPaymentError {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata: Metadata;
}
export interface RazorpayErrorResponse {
    error: RazorpayPaymentError;
}
//# sourceMappingURL=razorpay.model.d.ts.map