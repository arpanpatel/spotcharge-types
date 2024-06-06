import { CreatedByModel } from "../created-by.model";
import { PhoneNumberModel } from "../phone-number-model";
import { Timestamp } from "../timestamp";
import { UserRoleApiModel } from "./user-role.api.model";
export interface FleetOperatorApiModel {
    id: string;
    firstName: string;
    lastName: string;
    fleetIds: string[];
    email: string;
    password: string;
    phoneNumber: PhoneNumberModel | null;
    userId: string;
    roles: Pick<UserRoleApiModel, "title" | "value" | "id">;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=fleet-operator.api.model.d.ts.map