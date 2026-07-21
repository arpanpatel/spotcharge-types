import { CompanyUserEntityRole, UserRoleStatus } from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { PhoneNumberModel } from '../../phone-number-model';
import { ApiSortDirection } from '../users/admin-user.api.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
/** GET /api/companies/company-users */
export type CompanyUserListOrderBy = 'firstName' | 'lastName' | 'email' | 'companyName' | 'status' | 'createdAt';
export interface CompanyUserListItemApiModel {
    /** companies.company_users.id (uuid). */
    id: string;
    profileId: string;
    firebaseUid: string;
    companyId: string;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    status: UserRoleStatus;
    createdAt: IsoDateTime;
}
/** GET /api/companies/company-users — paginated list response */
export interface CompanyUserListApiModel {
    rows: CompanyUserListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    orderBy: CompanyUserListOrderBy;
    sortDirection: ApiSortDirection;
}
/** GET /api/companies/company-users/:id */
export interface CompanyUserDetailApiModel extends Omit<CompanyUserListItemApiModel, 'phoneNumber'>, AuditTimestampsApiModel {
    phoneNumber?: PhoneNumberModel | null;
    phoneNumberDisplay?: string;
    displayName?: string;
    timezone?: string;
    isDeleted: boolean;
    createdBy: AuditActor | null;
    updatedBy: AuditActor | null;
    deletedBy: AuditActor | null;
}
/** POST /api/companies/company-users */
export interface CreateCompanyUserRequest {
    companyId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: unknown;
}
/** PATCH /api/companies/company-users/:id */
export interface UpdateCompanyUserRequest {
    firstName?: string;
    lastName?: string;
    phoneNumber?: unknown;
    status?: UserRoleStatus;
}
/** POST /api/companies/company-users response */
export interface CreateCompanyUserResponse {
    companyUserId: string;
    profileId: string;
    firebaseUid: string;
    isNewUser: boolean;
    temporaryPassword?: string;
    email: string;
}
/** GET /api/companies/company-users/:id/business-unit-access */
export interface BusinessUnitAccessApiModel {
    id: string;
    companyUserId: string;
    businessUnitId: string;
    role: CompanyUserEntityRole;
    grantedAt: IsoDateTime;
    revokedAt?: IsoDateTime | null;
    createdAt: IsoDateTime;
    updatedAt?: IsoDateTime | null;
}
/** POST /api/companies/company-users/:id/business-unit-access */
export interface GrantBusinessUnitAccessRequest {
    businessUnitId: string;
    role: CompanyUserEntityRole;
}
/** PATCH /api/companies/company-users/:id/business-unit-access/:accessId */
export interface UpdateBusinessUnitAccessRequest {
    role: CompanyUserEntityRole;
}
//# sourceMappingURL=company-user.api.model.d.ts.map