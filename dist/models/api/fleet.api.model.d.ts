import { FranchiseModel } from "../franchise.model";
import { AddressApiModel } from "./address.api.model";
export interface FleetApiModel {
    id: string;
    fleetName: string;
    address: AddressApiModel;
    franchise: FranchiseModel;
    chargers: any[];
}
//# sourceMappingURL=fleet.api.model.d.ts.map