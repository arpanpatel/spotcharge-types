import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {UserRoleStatus} from "../../enum";

export interface CompanyUserApiModel {
  id: string; // `${companyId}__${userId}`
  companyId: string;
  userId: string;
  timeZone: string;
  status: UserRoleStatus;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
