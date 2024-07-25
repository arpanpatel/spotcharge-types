import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { RazorpaySuccessResponse } from "../razorpay.model";
import { BookingStatus, PaymentMethod, PaymentStatus, PointType } from "../../enum";
import { ServiceChargeModel } from "../service-charge.model";
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
    vehicle: number;
    amount: number;
    tax: number;
    totalAmount: number;
    paymentInfo: RazorpaySuccessResponse | null;
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
}
//# sourceMappingURL=booking.api.model.d.ts.map