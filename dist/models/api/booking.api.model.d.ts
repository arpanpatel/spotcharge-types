import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { BookingPaymentInfo } from "../booking-payment-info.model";
import { BookingStatus, PaymentStatus, PointType } from "../../enum";
import { ServiceChargeModel } from "../service-charge.model";
import { PublicUserVehicle } from "../public-user-vehicle.model";
import { PhoneNumberModel } from "../phone-number-model";
import { ConnectorTypeModel } from "../connector-type.model";
import { ResolvedTariff } from "../resolved-tariff.model";
export interface BookingApiModel {
    id: string;
    userId: string;
    userInfo: {
        id: string;
        name: string;
        phoneNumber: PhoneNumberModel;
    };
    chargingDate: Timestamp;
    startTime: number;
    endTime: number;
    startDateTime: Timestamp;
    endDateTime: Timestamp;
    charger: {
        id: string;
        name: string;
        address: string;
        pointType: PointType;
    };
    connectorNo: number;
    connectorType?: ConnectorTypeModel;
    unit: number;
    unitRate: number;
    vehicle: PublicUserVehicle;
    amount: number;
    tax: number;
    totalAmount: number;
    paymentInfo: BookingPaymentInfo | null;
    paymentStatus: PaymentStatus;
    status: BookingStatus;
    bookingRef: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    invoiceId?: string;
    invoiceNo?: number;
    serviceChargeInfo: ServiceChargeModel;
    serviceCharge: number;
    isServiceChargeApplicable: boolean;
    refundData?: Record<string, Refund>;
    timeZone: string;
    sourceHoldId: string;
    paymentExpiresAt?: Timestamp;
    confirmedAt?: Timestamp;
    expiredAt?: Timestamp;
    failedAt?: Timestamp;
    failureReason?: string;
    lastReconciliationCheck?: Timestamp;
    reconciliationAttempts?: number;
    paymentAttempts?: number;
    previousOrderIds?: string[];
    convertedFromRazorpay?: boolean;
    resolvedTariff?: ResolvedTariff;
}
export interface Refund {
    id: string;
    entity: string;
    amount: number;
    receipt: string | null;
    currency: string;
    payment_id: string;
    notes: string[];
    acquirer_data: {
        arn: string | null;
    };
    created_at: number;
    batch_id: string | null;
    status: "pending" | "processed" | "failed";
    speed_processed: string;
    speed_requested: string;
}
//# sourceMappingURL=booking.api.model.d.ts.map