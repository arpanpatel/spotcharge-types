import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import { UserRoleApiModel } from "./user-role.api.model";

export interface FranchiseUserApiModel {
  id: string; // `${franchiseId}__${userId}`
  franchiseId: string;
  role: Pick<UserRoleApiModel, "title" | "value" | "id">,
  userId: string;
  timeZone: string;
  isActive: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
