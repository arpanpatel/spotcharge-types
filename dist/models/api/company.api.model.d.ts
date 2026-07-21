import { CompanyType, CompanyStatus } from "../../enum";
import { PhoneNumberModel } from "../phone-number-model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { AddressApiModel } from "./address.api.model";
/** @deprecated Firestore document shape. Use CompanyDetailApiModel from `./companies` for Postgres REST API. */
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
    panNumber?: string;
    status: CompanyStatus;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy?: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt?: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=company.api.model.d.ts.map