import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {OrderType, PointType} from "../../enum";
import {ChargingTransactionRecords} from "../charging-transaction";
import {ServiceChargeModel} from "../service-charge.model";
import {PublicUserVehicle} from "../public-user-vehicle.model";
import {PhoneNumberModel} from "../phone-number-model";
import {AddressApiModel, StateModel} from "./address.api.model";
import {GstModel} from "./gst-record-api.model";
import {TaxConfigModel, InvoiceTaxModel} from "../tax-config.model";

export interface InvoiceApiModel {
    id: string;
    invoiceId: string;
    bookingId: string;
    bookingRef: string;
    bookingDate: Timestamp;
    bookingStartTime: number;
    bookingEndTime: number;
    expectedEndTime?: Timestamp; // for efficient auto-complete cron queries
    invoiceNo: number;
    chargerId: string; // this is the id of the charger in which set in machine
    chargerDocId: string; // this is the doc id of the charger in the chargers collection,
    stationId: string; // this is the doc id of the station in the stations collection,
    chargerName: string;
    stationName: string | null; // Station name at time of invoice creation (for legal compliance)
    stationAddress: string | null; // Station address at time of invoice creation (for legal compliance)
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
    stopReason: string;
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
    invoiceDuration?: number; // New field - use this instead of bookingDuration
    vehicle: PublicUserVehicle;
    isServiceChargeApplicable: boolean;
}
