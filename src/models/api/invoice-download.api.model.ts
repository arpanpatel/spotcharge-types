import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";

export interface InvoiceDownloadApiModel {
    id: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    isDone: boolean;
    downloadUrl: string | null;
    startDate: Timestamp;
    endDate: Timestamp;
    timeZone: string;
}

