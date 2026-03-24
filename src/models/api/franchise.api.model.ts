import {FranchiseType} from "../../enum";
import {FranchiseBusinessType} from "../../enum/franchise-business-type.enum";
import {FranchiseStatus} from "../../enum/franchise-status.enum";
import {PricingControl} from "../../enum/pricing-control.enum";
import {PhoneNumberModel} from "../phone-number-model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {AddressApiModel} from "./address.api.model";
import {BusinessModelConfig, RevenueConfig} from "./franchise-business-model";

export interface FranchiseApiModel {
    id: string;
    franchiseName: string;
    franchiseCode: string; // Human-friendly, unique, immutable
    contactEmail?: string;
    contactPhone?: PhoneNumberModel;
    // @deprecated — do not use 
    franchiseType: FranchiseType;
    // @deprecated — do not use 
    firstName: string;
    // @deprecated — do not use 
    lastName: string;
    // @deprecated — do not use
    phoneNumber: PhoneNumberModel;
    // @deprecated — do not use 
    email: string;
    // @deprecated — do not use 
    password: string;
    chargers: string[];
    address: AddressApiModel;
    // @deprecated — do not use 
    fleetInvoiceCount: number;
    // @deprecated — do not use 
    allowedFleetIds?: string[];
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    // @deprecated — do not use 
    userId: string;
    timeZone: string;
    companyId?: string;
    status?: FranchiseStatus;
    businessType?: FranchiseBusinessType;
    businessModel?: BusinessModelConfig;
    revenueConfig?: RevenueConfig;
    pricingControl?: PricingControl;
}
