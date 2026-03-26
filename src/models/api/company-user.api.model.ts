import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";

export interface CompanyUserApiModel {
  id: string; // `${companyId}__${userId}`
  companyId: string;
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
