import {Timestamp} from "../timestamp";

export interface FranchiseStationAccessApiModel {
    id: string;
    franchiseId: string;
    stationId: string;
    status: "allowed" | "revoked";
    createdAt: Timestamp;
    createdBy: string;
    revokedAt?: Timestamp;
    revokedBy?: string;
}
