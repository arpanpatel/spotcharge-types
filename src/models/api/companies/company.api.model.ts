import { CompanyStatus, CompanyType } from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { PhoneNumberModel } from '../../phone-number-model';
import { AddressApiModel } from '../address.api.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';

/** GET /api/companies */
export type CompanyListOrderBy = 'name' | 'status' | 'contactName' | 'createdAt';

export interface CompanyListItemApiModel {
  /** companies.companies.id (uuid). */
  id: string;
  name: string;
  displayName?: string;
  type?: CompanyType;
  contactName: string;
  contactEmail?: string;
  status: CompanyStatus;
  createdAt: IsoDateTime;
}

/** GET /api/companies — paginated list response */
export interface CompanyListApiModel {
  rows: CompanyListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: CompanyListOrderBy;
  sortDirection: ApiSortDirection;
}

/** GET /api/companies/:id */
export interface CompanyDetailApiModel
  extends Omit<CompanyListItemApiModel, 'contactEmail'>,
    AuditTimestampsApiModel {
  legacyFirestoreId?: string | null;
  contactPhone?: PhoneNumberModel | null;
  contactEmail?: string | null;
  address?: AddressApiModel | null;
  gstNumber?: string | null;
  panNumber?: string | null;
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

/** POST /api/companies — audit fields set server-side from auth token. */
export interface CreateCompanyRequest {
  name: string;
  displayName?: string;
  type?: CompanyType;
  contactName: string;
  contactPhone?: PhoneNumberModel | null;
  contactEmail?: string;
  address?: AddressApiModel | null;
  gstNumber?: string;
  panNumber?: string;
  status?: CompanyStatus;
}

/** PATCH /api/companies/:id */
export interface UpdateCompanyRequest {
  name?: string;
  displayName?: string | null;
  type?: CompanyType | null;
  contactName?: string;
  contactPhone?: PhoneNumberModel | null;
  contactEmail?: string | null;
  address?: AddressApiModel | null;
  gstNumber?: string | null;
  panNumber?: string | null;
  status?: CompanyStatus;
}
