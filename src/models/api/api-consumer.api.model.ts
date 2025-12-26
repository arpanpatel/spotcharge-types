import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";

export interface ApiConsumerApiModel {
  id: string; // internal UUID
  name: string; // Partner / company name
  description?: string;

  // Client Credentials
  clientId: string; // public identifier
  clientSecretHash: string; // hashed secret only (never expose)

  isActive: boolean; // master kill switch

  // Optional security controls
  allowedIps?: string[]; // IP whitelist
  rateLimit?: {
    requestsPerMinute: number;
  };

  // Audit fields
  lastAuthAt?: string; // last successful authentication
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  timeZone: string;
}
