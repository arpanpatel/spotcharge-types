import {FranchiseType} from "../../enum";
import {PhoneNumberModel} from "../phone-number-model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {AddressApiModel} from "./address.api.model";

export interface FranchiseApiModel {
    id: string;
    franchiseName: string;
    franchiseType: FranchiseType;
    firstName: string;
    lastName: string;
    phoneNumber: PhoneNumberModel;
    email: string;
    password: string;
    chargers: string[];
    address: AddressApiModel;
    fleetInvoiceCount: number;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    userId: string;
    timeZone: string;
}
