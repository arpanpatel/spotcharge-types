import { FranchiseModel } from './franchise.model';
import { CountryModel } from './country.model';
import { UserRoleApiModel } from './api';
import { FirebaseProviderType, VehicleType } from '../enum';
import { PhoneNumberModel } from './phone-number-model';
import { Timestamp } from "./timestamp";
import { CreatedByModel } from "./created-by.model";
import { PermissionKeys } from "../consts";
import { UserRolePermission } from "./user-role-permission";
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
    isProfileComplete: boolean;
    gender: string;
    color: string;
    emailVerified: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    walletBalance: number;
    roles?: Pick<UserRoleApiModel, 'title' | 'value' | 'id'>;
    providerData?: ProviderData[];
    fleet?: string[] | null;
    fleetUserId?: string;
    fleetOperatorId?: string;
    adminUserId: string | null;
    allowedFleetIds?: string[];
    vehicles?: UserVehicle[];
    permissions?: Record<PermissionKeys, UserRolePermission> | null;
    userTokens?: string[];
    isBlocked?: boolean;
}
export interface ProviderData {
    displayName: string;
    email: string;
    phoneNumber: null;
    photoURL: string;
    providerId: FirebaseProviderType;
    uid: string;
}
export interface UserVehicle {
    id: string;
    registrationNo: string;
    lastUsedAt?: Timestamp;
    isCustom?: boolean;
    brandName?: string;
    vehicleType?: VehicleType;
    modelName?: string;
}
//# sourceMappingURL=user.model.d.ts.map