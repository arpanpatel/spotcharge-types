import { AuditTimestampsApiModel, ApiSortDirection } from '../users';
import { PartnerInquiryInvestmentRange, PartnerInquiryLocationReadiness, PartnerInquiryTimeline } from '../partner-inquiry.api.model';
/** partner-inquiries status enum */
export declare enum PartnerInquiryStatus {
    NEW = "new",
    CONTACTED = "contacted",
    IN_PROGRESS = "in_progress",
    CLOSED = "closed"
}
/** GET /api/partner-inquiries */
export type PartnerInquiryListOrderBy = 'fullName' | 'email' | 'phone' | 'city' | 'status' | 'createdAt';
export interface PartnerInquiryListItemApiModel {
    /** partner_inquiries.id (uuid). */
    id: string;
    referenceId: string;
    fullName: string;
    email: string;
    phone: string;
    city: string;
    postCode: string;
    investmentRange: PartnerInquiryInvestmentRange;
    locationReadiness: PartnerInquiryLocationReadiness;
    timeline: PartnerInquiryTimeline;
    status: string;
    source: string;
    createdAt: string;
}
/** GET /api/partner-inquiries — paginated list response */
export interface PartnerInquiryListApiModel {
    rows: PartnerInquiryListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    orderBy: PartnerInquiryListOrderBy;
    sortDirection: ApiSortDirection;
}
/** GET /api/partner-inquiries/:id */
export interface PartnerInquiryDetailApiModel extends Omit<PartnerInquiryListItemApiModel, 'createdAt'>, AuditTimestampsApiModel {
    siteLocationLink?: string | null;
    hasParkingSpace?: boolean | null;
    spaceSize?: string | null;
    previousExperience?: string | null;
    additionalComments?: string | null;
    legacyFirestoreId?: string | null;
    isDeleted: boolean;
}
/** POST /api/partner-inquiries */
export interface CreatePartnerInquiryRequest {
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
    source?: string;
}
/** POST /api/partner-inquiries — create response */
export interface CreatePartnerInquiryResponse {
    id: string;
    referenceId: string;
}
/** PATCH /api/partner-inquiries/:id */
export interface UpdatePartnerInquiryRequest {
    status?: PartnerInquiryStatus | string;
}
//# sourceMappingURL=partner-inquiry.api.model.d.ts.map