import { AuditTimestampsApiModel, ApiSortDirection } from '../users';

export enum ChannelPartnerEntityType {
  INDIVIDUAL_PROPRIETORSHIP = 'INDIVIDUAL_PROPRIETORSHIP',
  PARTNERSHIP = 'PARTNERSHIP',
  LLP = 'LLP',
  PRIVATE_LIMITED = 'PRIVATE_LIMITED',
  OTHER = 'OTHER',
}

export enum ChannelPartnerYearsInBusiness {
  NEW = 'NEW',
  LT_1_YEAR = 'LT_1_YEAR',
  Y1_3 = 'Y1_3',
  Y3_5 = 'Y3_5',
  Y5_10 = 'Y5_10',
  GT_10 = 'GT_10',
}

export enum ChannelPartnerInvestmentCapacity {
  UNDER_5L = 'UNDER_5L',
  L10_15 = 'L10_15',
  L15_25 = 'L15_25',
  L25_50 = 'L25_50',
  L50_PLUS = 'L50_PLUS',
}

export enum ChannelPartnerTimeline {
  IMMEDIATE = 'IMMEDIATE',
  M1_3 = 'M1_3',
  M3_6 = 'M3_6',
  EXPLORING = 'EXPLORING',
}

export enum ChannelPartnerSource {
  GOOGLE = 'GOOGLE',
  SOCIAL = 'SOCIAL',
  REFERRAL = 'REFERRAL',
  EVENT = 'EVENT',
  NEWS = 'NEWS',
  OTHER = 'OTHER',
}

export enum ChannelPartnerApplicationStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  IN_PROGRESS = 'in_progress',
  CLOSED = 'closed',
}

/** GET /api/channel-partner-applications */
export type ChannelPartnerApplicationListOrderBy =
  | 'fullName'
  | 'email'
  | 'phone'
  | 'city'
  | 'state'
  | 'createdAt';

export interface ChannelPartnerApplicationListItemApiModel {
  id: string;
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  pincode: string;
  investmentCapacity: ChannelPartnerInvestmentCapacity;
  status: string;
  createdAt: string;
}

/** GET /api/channel-partner-applications — paginated list response */
export interface ChannelPartnerApplicationListApiModel {
  rows: ChannelPartnerApplicationListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: ChannelPartnerApplicationListOrderBy;
  sortDirection: ApiSortDirection;
}

/** GET /api/channel-partner-applications/:id */
export interface ChannelPartnerApplicationDetailApiModel
  extends Omit<ChannelPartnerApplicationListItemApiModel, 'createdAt'>,
    AuditTimestampsApiModel {
  companyName?: string | null;
  entityType: ChannelPartnerEntityType;
  yearsInBusiness?: ChannelPartnerYearsInBusiness | null;
  industry?: string | null;
  gstNumber?: string | null;
  timeline: ChannelPartnerTimeline;
  whyPartner: string;
  source: ChannelPartnerSource;
  consent: boolean;
  sourceChannel: string;
  isDeleted: boolean;
}

/** POST /api/channel-partner-applications */
export interface CreateChannelPartnerApplicationRequest {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  companyName?: string;
  entityType: ChannelPartnerEntityType;
  yearsInBusiness?: ChannelPartnerYearsInBusiness;
  industry?: string;
  gstNumber?: string;
  investmentCapacity: ChannelPartnerInvestmentCapacity;
  timeline: ChannelPartnerTimeline;
  whyPartner: string;
  source: ChannelPartnerSource;
  consent: boolean;
}

/** POST /api/channel-partner-applications — create response */
export interface CreateChannelPartnerApplicationResponse {
  id: string;
  referenceId: string;
}

/** PATCH /api/channel-partner-applications/:id */
export interface UpdateChannelPartnerApplicationRequest {
  status?: ChannelPartnerApplicationStatus | string;
}
