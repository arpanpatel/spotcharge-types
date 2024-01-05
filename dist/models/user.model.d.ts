import { FranchiseModel } from './franchise.model';
import { CountryModel } from './country.model';
import { UserRoleApiModel } from './api';
import { FirebaseProviderType } from '../enum';
import { PhoneNumberModel } from './phone-number-model';
import { Timestamp } from "./timestamp";
import { CreatedByModel } from "./created-by.model";
export interface UserModel {
    id: string;
    userId: string;
    email: string;
    franchise: FranchiseModel;
    country: CountryModel;
    phoneNumber: PhoneNumberModel | null;
    photoURL: string | null;
    displayName?: string;
    firstName: string;
    lastName?: string;
    gender: string;
    color: string;
    staffId: string;
    outletIds: Array<string>;
    emailVerified: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    roles?: Pick<UserRoleApiModel, 'title' | 'value' | 'id'>;
    providerData?: ProviderData[];
    fleet?: string[] | null;
    fleetUserId?: string;
    allowedFleets?: string[];
}
export interface ProviderData {
    displayName: string;
    email: string;
    phoneNumber: null;
    photoURL: string;
    providerId: FirebaseProviderType;
    uid: string;
}
//# sourceMappingURL=user.model.d.ts.map