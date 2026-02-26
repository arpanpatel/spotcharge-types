import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface FleetUserAccessApiModel {
    id: string;
    userId: string;
    fleetId: string;
    status: "active" | "revoked";
    createdAt: Timestamp;
    createdBy: CreatedByModel;
    revokedAt?: Timestamp;
    revokedBy?: CreatedByModel;
    updatedAt: Timestamp;
    updatedBy: CreatedByModel;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=fleet-user-access.api.model.d.ts.map