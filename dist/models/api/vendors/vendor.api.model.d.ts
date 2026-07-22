import { PhoneNumberModel } from '../../phone-number-model';
import { AddressApiModel } from '../address.api.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';
/** GET /api/vendors */
export type VendorListOrderBy = 'name' | 'email' | 'contactPersonName' | 'createdAt';
export interface VendorListItemApiModel {
    /** master.vendors.id (uuid). */
    id: string;
    name: string;
    contactPersonName?: string | null;
    email?: string | null;
    phoneNumber?: PhoneNumberModel | null;
    createdAt: IsoDateTime;
}
/** GET /api/vendors — paginated list response */
export interface VendorListApiModel {
    rows: VendorListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    orderBy: VendorListOrderBy;
    sortDirection: ApiSortDirection;
}
/** GET /api/vendors/:id */
export interface VendorDetailApiModel extends Omit<VendorListItemApiModel, 'email' | 'phoneNumber' | 'contactPersonName'>, AuditTimestampsApiModel {
    legacyFirestoreId?: string | null;
    contactPersonName?: string | null;
    phoneNumber?: PhoneNumberModel | null;
    website?: string | null;
    email?: string | null;
    description?: string | null;
    address?: AddressApiModel | null;
    isDeleted: boolean;
}
/** POST /api/vendors */
export interface CreateVendorRequest {
    name: string;
    contactPersonName?: string;
    phoneNumber?: PhoneNumberModel | null;
    website?: string;
    email?: string;
    description?: string;
    address?: AddressApiModel | null;
}
/** PATCH /api/vendors/:id */
export interface UpdateVendorRequest {
    name?: string;
    contactPersonName?: string | null;
    phoneNumber?: PhoneNumberModel | null;
    website?: string | null;
    email?: string | null;
    description?: string | null;
    address?: AddressApiModel | null;
}
//# sourceMappingURL=vendor.api.model.d.ts.map