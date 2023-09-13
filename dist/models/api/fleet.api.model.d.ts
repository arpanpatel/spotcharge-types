import { FranchiseModel } from "../franchise.model";
import { AddressApiModel } from "./address.api.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { FleetChargerModel } from "../fleet-charger.model";
export interface FleetApiModel {
    id: string;
    name: string;
    address: AddressApiModel;
    franchise: FranchiseModel;
    chargers: FleetChargerModel[];
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=fleet.api.model.d.ts.map