import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export declare enum FranchiseInvestmentRange {
    TEN_TO_FIFTEEN_LAKHS = "10_15_LAKHS",
    FIFTEEN_TO_TWENTYFIVE_LAKHS = "15_25_LAKHS",
    TWENTYFIVE_PLUS_LAKHS = "25_PLUS_LAKHS",
    EXPLORING = "EXPLORING"
}
export declare enum FranchiseLocationReadiness {
    OWNED = "OWNED",
    RENTED = "RENTED",
    NEED_ASSISTANCE = "NEED_ASSISTANCE",
    EXPLORING = "EXPLORING"
}
export declare enum FranchiseTimeline {
    IMMEDIATE = "IMMEDIATE",
    ONE_TO_THREE_MONTHS = "1_3_MONTHS",
    THREE_TO_SIX_MONTHS = "3_6_MONTHS",
    RESEARCHING = "RESEARCHING"
}
export interface FranchiseSubmissionApiModel {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    city: string;
    postCode: string;
    investmentRange: FranchiseInvestmentRange;
    locationReadiness: FranchiseLocationReadiness;
    timeline: FranchiseTimeline;
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
//# sourceMappingURL=franchise-submission.api.model.d.ts.map