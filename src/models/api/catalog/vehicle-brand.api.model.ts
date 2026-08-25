import { ApiSortDirection, AuditTimestampsApiModel } from '../users';

/** GET /api/vehicle-brands | GET /api/admin/vehicle-brands list */
export type VehicleBrandListOrderBy = 'name' | 'createdAt';

export interface PublicVehicleBrandListItemApiModel {
  id: string;
  name: string;
  logo: string | null;
}

export interface AdminVehicleBrandListItemApiModel extends PublicVehicleBrandListItemApiModel {
  isActive: boolean;
  createdAt: string;
}

export interface PublicVehicleBrandListApiModel {
  rows: PublicVehicleBrandListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: VehicleBrandListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface AdminVehicleBrandListApiModel {
  rows: AdminVehicleBrandListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: VehicleBrandListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface AdminVehicleBrandDetailApiModel
  extends Omit<AdminVehicleBrandListItemApiModel, 'createdAt'>,
    AuditTimestampsApiModel {
  legacyFirestoreId?: string | null;
  isDeleted: boolean;
}

export interface CreateVehicleBrandRequest {
  name: string;
  logo?: string | null;
  isActive?: boolean;
}

export interface UpdateVehicleBrandRequest {
  name?: string;
  logo?: string | null;
  isActive?: boolean;
}
