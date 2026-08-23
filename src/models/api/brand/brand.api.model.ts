import { ApiSortDirection, AuditTimestampsApiModel } from '../users';

/** GET /api/brands */
export type BrandListOrderBy = 'name' | 'createdAt';

export interface BrandListItemApiModel {
  /** brands.id (uuid). */
  id: string;
  name: string;
  logo: string | null;
  showOnFleet: boolean;
  showOnPublic: boolean;
  createdAt: string;
}

/** GET /api/brands — paginated list response */
export interface BrandListApiModel {
  rows: BrandListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: BrandListOrderBy;
  sortDirection: ApiSortDirection;
}

/** GET /api/brands/:id */
export interface BrandDetailApiModel
  extends Omit<BrandListItemApiModel, 'createdAt'>,
    AuditTimestampsApiModel {
  legacyFirestoreId?: string | null;
  isDeleted: boolean;
}

/** POST /api/brands */
export interface CreateBrandRequest {
  name: string;
  logo?: string | null;
  showOnFleet: boolean;
  showOnPublic: boolean;
}

/** POST /api/brands — create response */
export interface CreateBrandResponse {
  id: string;
}

/** PATCH /api/brands/:id */
export interface UpdateBrandRequest {
  name?: string;
  logo?: string | null;
  showOnFleet?: boolean;
  showOnPublic?: boolean;
}
