import { FleetModel } from "../fleet.model";
import { FranchiseModel } from "../franchise.model";

export interface FleetUserApiModel {
  id: string;
  firstName: string;
  lastName: string;
  franchise: FranchiseModel;
  fleets: Array<FleetModel>;
  email: string;
  password: string;
}
