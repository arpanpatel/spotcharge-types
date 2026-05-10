import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export declare enum PartnerInquiryInvestmentRange {
    TEN_TO_FIFTEEN_LAKHS = "10_15_LAKHS",
    FIFTEEN_TO_TWENTYFIVE_LAKHS = "15_25_LAKHS",
    TWENTYFIVE_PLUS_LAKHS = "25_PLUS_LAKHS",
    EXPLORING = "EXPLORING"
}
export declare enum PartnerInquiryLocationReadiness {
    OWNED = "OWNED",
    RENTED = "RENTED",
    NEED_ASSISTANCE = "NEED_ASSISTANCE",
    EXPLORING = "EXPLORING"
}
export declare enum PartnerInquiryTimeline {
    IMMEDIATE = "IMMEDIATE",
    ONE_TO_THREE_MONTHS = "1_3_MONTHS",
    THREE_TO_SIX_MONTHS = "3_6_MONTHS",
    RESEARCHING = "RESEARCHING"
}
export interface PartnerInquiryApiModel {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    city: string;
    postCode: string;
    investmentRange: PartnerInquiryInvestmentRange;
    locationReadiness: PartnerInquiryLocationReadiness;
    timeline: PartnerInquiryTimeline;
    siteLocationLink?: string | null;
    hasParkingSpace?: boolean | null;
    spaceSize?: string | null;
    previousExperience?: string | null;
    additionalComments?: string | null;
    source: string;
    status: string;
    updatedBy?: CreatedByModel | null;
    createdBy?: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=partner-inquiry.api.model.d.ts.map