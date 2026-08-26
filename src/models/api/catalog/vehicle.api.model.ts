import { VehicleTypeCatalog } from '../../../consts/catalog/vehicle-type.const';
import { ApiSortDirection, AuditTimestampsApiModel } from '../users';
import {
  AdminVehicleBrandListItemApiModel,
  PublicVehicleBrandListItemApiModel,
} from './vehicle-brand.api.model';

/** GET /api/vehicles | GET /api/admin/vehicles list */
export type VehicleListOrderBy = 'model' | 'createdAt';

export interface PublicVehicleBrandEmbedApiModel {
  id: string;
  name: string;
  logo: string | null;
}

export interface PublicVehicleListItemApiModel {
  id: string;
  model: string;
  image: string | null;
  batteryCapacity: number | null;
  type: VehicleTypeCatalog;
  year: number | null;
  brand: PublicVehicleBrandEmbedApiModel;
}

export interface AdminVehicleListItemApiModel {
  id: string;
  model: string;
  image: string | null;
  batteryCapacity: number | null;
  type: VehicleTypeCatalog;
  vehicleBrandId: string;
  isActive: boolean;
  year: number | null;
  brand: AdminVehicleBrandListItemApiModel;
  createdAt: string;
}

export interface PublicVehicleListApiModel {
  rows: PublicVehicleListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: VehicleListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface AdminVehicleListApiModel {
  rows: AdminVehicleListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: VehicleListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface AdminVehicleDetailApiModel
  extends Omit<AdminVehicleListItemApiModel, 'brand' | 'createdAt'>,
    AuditTimestampsApiModel {
  year: number | null;
  legacyFirestoreId?: string | null;
  brand: PublicVehicleBrandEmbedApiModel;
  isDeleted: boolean;
}

export interface CreateVehicleRequest {
  vehicleBrandId: string;
  model: string;
  image?: string | null;
  batteryCapacity?: number | null;
  type: VehicleTypeCatalog;
  year?: number | null;
  isActive?: boolean;
}

export interface UpdateVehicleRequest {
  vehicleBrandId?: string;
  model?: string;
  image?: string | null;
  batteryCapacity?: number | null;
  type?: VehicleTypeCatalog;
  year?: number | null;
  isActive?: boolean;
}
