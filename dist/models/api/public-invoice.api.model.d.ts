import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { PhoneNumberModel } from "../phone-number-model";
import { AddressApiModel } from "./address.api.model";
import { FranchiseModel } from "../franchise.model";
export declare enum PublicInvoiceStatus {
    Paid = "Paid",
    UnPaid = "UnPaid",
    PartialPaid = "PartialPaid",
    Cancelled = "Cancelled",
    Void = "Void"
}
export interface PublicInvoiceItemModel {
    id: string;
    itemName: string;
    itemType: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    discount?: number;
    discountType?: 'percentage' | 'amount';
    appointmentDate?: string;
    staffName?: string;
}
export interface PublicInvoicePaymentModel {
    id: string;
    paymentMethod: string;
    amount: number;
    date: string;
    transactionId?: string;
}
export interface PublicInvoiceTaxDetailModel {
    name: string;
    percentage: number;
    taxAmount: number;
}
export interface PublicInvoiceSocialMediaModel {
    facebook?: string;
    instagram?: string;
    youtube?: string;
}
export interface PublicInvoiceApiModel {
    id: string;
    invoiceId: string;
    invoiceNo: number;
    invoiceDate: Timestamp;
    franchise: FranchiseModel;
    stationId: string;
    stationName: string;
    stationAddress: AddressApiModel;
    stationLogoUrl?: string;
    customerName: string;
    customerId: string;
    customerPhoneNumber?: PhoneNumberModel;
    customerEmail?: string;
    items: PublicInvoiceItemModel[];
    subTotal: number;
    totalDiscount: number;
    taxDetails?: PublicInvoiceTaxDetailModel[];
    totalTax: number;
    totalAmount: number;
    payments: PublicInvoicePaymentModel[];
    paymentStatus: PublicInvoiceStatus;
    paymentDue: number;
    currencyCode: string;
    isReviewAdded: boolean;
    reviewId?: string;
    socialMediaLinks?: PublicInvoiceSocialMediaModel;
    termsAndConditions?: string;
    showTermsAndConditions: boolean;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
}
//# sourceMappingURL=public-invoice.api.model.d.ts.map