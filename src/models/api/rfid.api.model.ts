import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";


export interface RfidApiModel {
  id: string;
  rfid: string;
  userId: string;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deleteBy: CreatedByModel;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
