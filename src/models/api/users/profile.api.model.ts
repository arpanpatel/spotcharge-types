import { PhoneNumberModel } from '../../phone-number-model';

/** GET /api/users/profiles/by-email */
export interface CheckProfileByEmailApiModel {
  exists: boolean;
  profileId?: string;
  firebaseUid?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: PhoneNumberModel | null;
}
