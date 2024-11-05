import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { RazorpaySuccessResponse } from "../razorpay.model";
import { BookingStatus, PaymentMethod, PaymentStatus, PointType } from "../../enum";
import { ServiceChargeModel } from "../service-charge.model";
import { PublicUserVehicle } from "../public-user-vehicle.model";
import { PhoneNumberModel } from "../phone-number-model";
export interface BookingApiModel {
    id: string;
    userId: string;
    userInfo: {
        id: string;
        name: string;
    };
    chargingDate: Timestamp;
    startTime: number;
    endTime: number;
    charger: {
        id: string;
        name: string;
        address: string;
        pointType: PointType;
    };
    connectorNo: number;
    unit: number;
    vehicle: PublicUserVehicle;
    amount: number;
    tax: number;
    totalAmount: number;
    chargedAmount: number;
    paymentInfo: RazorpaySuccessResponse | null;
    phoneNumber: PhoneNumberModel;
    paymentStatus: PaymentStatus;
    status: BookingStatus;
    state: string;
    bookingRef: string;
    paymentVerified: false;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    paymentMethod: PaymentMethod;
    invoiceId?: string;
    walletAmount?: number;
    topUpAmount?: number;
    serviceChargeInfo: ServiceChargeModel;
    serviceCharge: number;
    refundData?: Record<string, Refund>;
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