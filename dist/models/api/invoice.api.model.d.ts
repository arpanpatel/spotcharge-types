import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { OrderStopReason, OrderType, PointType } from "../../enum";
import { ChargingTransactionRecords } from "../charging-transaction";
import { ServiceChargeModel } from "../service-charge.model";
import { PublicUserVehicle } from "../public-user-vehicle.model";
import { PhoneNumberModel } from "../phone-number-model";
import { AddressApiModel, StateModel } from "./address.api.model";
import { GstModel } from "./gst-record-api.model";
import { TaxConfigModel, InvoiceTaxModel } from "../tax-config.model";
export interface InvoiceApiModel {
    id: string;
    invoiceId: string;
    bookingId: string;
    bookingRef: string;
    bookingDate: Timestamp;
    bookingStartTime: number;
    bookingEndTime: number;
    expectedEndTime?: Timestamp;
    invoiceNo: number;
    chargerId: string;
    chargerDocId: string;
    stationId: string;
    chargerName: string;
    stationName: string | null;
    stationAddress: string | null;
    initialBatteryPercentage?: number;
    chargerAddress: AddressApiModel;
    chargerState: StateModel;
    gst: GstModel;
    customerName: string;
    chargingDate: Timestamp;
    startTime: Timestamp;
    endTime: Timestamp;
    unitConsumed: number;
    state: string;
    connectorNo: number;
    userId: string;
    unitRate: number;
    orderType: OrderType;
    stopReason: OrderStopReason;
    stopSource: string;
    transactionId: number;
    currentTransactionId: number;
    transaction: ChargingTransactionRecords;
    meterStart: number;
    meterStop: number;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    serviceChargeInfo: ServiceChargeModel;
    serviceCharge: number;
    taxConfig: TaxConfigModel | null;
    tax: InvoiceTaxModel | null;
    taxAmount: number;
    subTotal: number;
    pointType: PointType;
    outputType?: "AC" | "DC";
    isDirectStop?: boolean;
    batteryPercentage: number;
    recordHealth: 'bad' | 'good';
    phoneNumber: PhoneNumberModel;
    totalConsumedUnits: number;
    totalAmount: number;
    bookingUnit: number;
    bookingAmount: number;
    /**
     * @description This field is used to check if the invoice has been reviewed or not
     */
    isReviewAdded: boolean;
    /**
     * @description This field is used to store the review id of the invoice
     */
    reviewId: string | null;
    /** @deprecated Use invoiceDuration instead */
    bookingDuration: number;
    invoiceDuration?: number;
    vehicle: PublicUserVehicle;
    isServiceChargeApplicable: boolean;
}
//# sourceMappingURL=invoice.api.model.d.ts.map