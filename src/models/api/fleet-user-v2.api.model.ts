import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {UserRoleApiModel} from "./user-role.api.model";
import {UserRoleStatus} from "../../enum";

export interface FleetUserV2ApiModel {
  id: string;
  userId: string;
  role: Pick<UserRoleApiModel, "title" | "value" | "id">;
  status: UserRoleStatus;
  timeZone: string;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
