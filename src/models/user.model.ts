import {FranchiseModel} from './franchise.model';
import {CountryModel} from './country.model';
import {UserRoleApiModel} from './api';
import {FirebaseProviderType} from '../enum';
import {PhoneNumberModel} from './phone-number-model';
import {Timestamp} from "./timestamp";
import {CreatedByModel} from "./created-by.model";
import {FleetModel} from "./fleet.model";

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
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  updatedAt: Timestamp;
  createdAt: Timestamp;
  outletIds: Array<string>;
  emailVerified: boolean;
  roles?: Pick<UserRoleApiModel, 'title'| 'value' | 'id'>;
  favouriteSalons?: string[];
  providerData?: ProviderData[]
  fleet?: string[];
}

export interface ProviderData {
  displayName:string;
  email: string;
  phoneNumber: null;
  photoURL: string;
  providerId: FirebaseProviderType;
  uid:string;
}
