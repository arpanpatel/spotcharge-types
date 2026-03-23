import {CompanyType, CompanyStatus} from "../../enum";
import {PhoneNumberModel} from "../phone-number-model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {AddressApiModel} from "./address.api.model";

export interface CompanyApiModel {
    id: string;
    name: string;
    displayName?: string;
    type?: CompanyType;
    contactName: string;
    contactPhone?: PhoneNumberModel;
    contactEmail?: string;
    address?: AddressApiModel;
    gstNumber?: string;
    status: CompanyStatus;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy?: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt?: Timestamp | null;
    isDeleted: boolean;
}
