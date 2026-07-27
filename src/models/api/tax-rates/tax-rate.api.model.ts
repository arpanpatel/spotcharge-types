import { GstType, TaxCategory } from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';

/** GET /api/tax-rates */
export type TaxRateListOrderBy = 'name' | 'type' | 'createdAt';

export interface TaxRateListItemApiModel {
  /** tax.tax_rates.id (uuid). */
  id: string;
  name: string;
  type: TaxCategory;
  percentage: number | null;
  taxSpecificType: GstType;
  createdAt: IsoDateTime;
}

/** GET /api/tax-rates — paginated list response */
export interface TaxRateListApiModel {
  rows: TaxRateListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: TaxRateListOrderBy;
  sortDirection: ApiSortDirection;
}

/** Expanded group tax for GST detail / billing */
export interface TaxRateGroupComponentApiModel {
  id: string;
  name: string;
  percentage: number;
  type: GstType;
}

export interface TaxRateGroupApiModel {
  id: string;
  name: string;
  components: TaxRateGroupComponentApiModel[];
}

/** GET /api/tax-rates/:id */
export interface TaxRateDetailApiModel
  extends Omit<TaxRateListItemApiModel, 'createdAt'>,
    AuditTimestampsApiModel {
  legacyFirestoreId?: string | null;
  memberTaxRateIds: string[];
  isDeleted: boolean;
  createdAt: IsoDateTime;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

/** POST /api/tax-rates */
export interface CreateTaxRateRequest {
  name: string;
  type: TaxCategory;
  percentage?: number | null;
  taxSpecificType: GstType;
  memberTaxRateIds?: string[];
}

/** PATCH /api/tax-rates/:id */
export interface UpdateTaxRateRequest {
  name?: string;
  percentage?: number | null;
  taxSpecificType?: GstType;
  memberTaxRateIds?: string[];
}
