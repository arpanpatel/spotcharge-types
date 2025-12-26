import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface ApiConsumerApiModel {
    id: string;
    name: string;
    description?: string;
    clientId: string;
    clientSecretHash: string;
    isActive: boolean;
    allowedIps?: string[];
    rateLimit?: {
        requestsPerMinute: number;
    };
    lastAuthAt?: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=api-consumer.api.model.d.ts.map