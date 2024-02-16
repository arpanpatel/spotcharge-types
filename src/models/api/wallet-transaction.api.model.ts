import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {TransactionReason, TransactionType} from "../../enum";
import {RazorpaySuccessResponse} from "../razorpay.model";

export interface WalletTransactionApiModel {
  id: string;
  userId: string;
  amount: number;
  paymentInfo: RazorpaySuccessResponse | null;
  type: TransactionType;
  reason: TransactionReason;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deleteBy: CreatedByModel;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
