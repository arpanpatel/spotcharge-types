import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {CompanyUserStatus} from "../../enum";

export interface CompanyUserApiModel {
  id: string; // `${companyId}__${userId}`
  companyId: string;
  userId: string;
  timeZone: string;
  status: CompanyUserStatus;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
