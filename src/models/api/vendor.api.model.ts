import {CreatedByModel} from "../created-by.model";
import {PhoneNumberModel} from "../phone-number-model";
import {Timestamp} from "../timestamp";
import {AddressApiModel} from "./address.api.model";

export interface VendorApiModel {
  id: string;
  name: string;
  contactPersonName: string;
  phoneNumber: PhoneNumberModel;
  website: string;
  email: string;
  description: string;
  address: AddressApiModel;
  chargers: any[];
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
