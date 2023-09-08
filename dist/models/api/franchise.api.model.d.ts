import { FranchiseType } from "../../enum";
import { PhoneNumberModel } from "../phone-number-model";
export interface FranchiseApiModel {
    id: string;
    franchiseName: string;
    franchiseType: FranchiseType;
    ownerName: string;
    phoneNumber: PhoneNumberModel;
    email: string;
    password: string;
}
//# sourceMappingURL=franchise.api.model.d.ts.map