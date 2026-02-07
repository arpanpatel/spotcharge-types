import { FranchiseModel } from "../franchise.model";
import { AddressApiModel } from "./address.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface FleetApiModel {
    id: string;
    name: string;
    fleetCode?: string;
    status?: 'active' | 'inactive';
    address: AddressApiModel;
    franchise: FranchiseModel;
    chargers: string[];
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    credit: number;
    remainingCredit: number;
    billingStartDate: number;
    timeZone: string;
}
//# sourceMappingURL=fleet.api.model.d.ts.map