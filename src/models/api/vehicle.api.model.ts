import {BrandModel} from "../brand.model";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";

export interface VehicleApiModel {
  id: string;
  brand: BrandModel;
  model: string;
  year: number;
  batteryCapacity: number;
  image: string;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deleteBy: CreatedByModel;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
}
