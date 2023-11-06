import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {FleetModel} from "../fleet.model";
import {FranchiseModel} from "../franchise.model";

export interface FleetInvoiceApiModel {
    id: string;
    billDate: Timestamp;
    fleet: FleetModel;
    franchise: FranchiseModel;
    totalAmount: number;
    totalUsedAmount: number;
    totalConsumedUnits: number;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}


