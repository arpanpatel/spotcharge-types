import { UserRoleStatus } from '../../../enum';
import { PhoneNumberModel } from '../../phone-number-model';
import { BusinessUnitAccessApiModel } from '../companies/company-user.api.model';
/** Profile slice returned by GET /api/partner/me */
export interface PartnerProfileApiModel {
    profileId: string;
    firebaseUid: string;
    email: string;
    firstName: string;
    lastName?: string;
    displayName?: string;
    phoneNumber?: PhoneNumberModel | null;
    photoUrl?: string | null;
    color?: string | null;
}
/** Active company membership slice returned by GET /api/partner/me */
export interface PartnerCompanyUserApiModel {
    /** companies.company_users.id (uuid). */
    id: string;
    status: UserRoleStatus;
    timezone?: string;
}
/** Company summary slice returned by GET /api/partner/me */
export interface PartnerCompanySummaryApiModel {
    /** companies.companies.id (uuid). */
    id: string;
    name: string;
    gstNumber?: string | null;
    legacyFirestoreId?: string | null;
}
/** GET /api/partner/me */
export interface PartnerMeApiModel {
    profile: PartnerProfileApiModel;
    companyUser: PartnerCompanyUserApiModel;
    company: PartnerCompanySummaryApiModel;
    businessUnitAccess: BusinessUnitAccessApiModel[];
}
//# sourceMappingURL=partner-me.api.model.d.ts.map