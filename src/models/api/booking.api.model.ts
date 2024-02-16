import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {RazorpaySuccessResponse} from "../razorpay.model";
import {PaymentStatus} from "../../enum";

export interface BookingApiModel {
  id: string;
  userId: string;
  userInfo: {
    id: string,
    name: string
  };
  chargingDate: Date;
  startTime: number;
  endTime: number;
  charger: {
    id: string;
    name: string;
    address: string;
  };
  connectorNo: number;
  unit: number;
  vehicle: number;
  amount: number;
  tax: number;
  totalAmount: number;
  paymentInfo: RazorpaySuccessResponse | null;
  paymentStatus: PaymentStatus;
  bookingRef: string;
  paymentVerified: false;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deleteBy: CreatedByModel;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
