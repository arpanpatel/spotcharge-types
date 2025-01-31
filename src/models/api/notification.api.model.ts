import {Timestamp} from "../timestamp";
import {CreatedByModel} from "../created-by.model";

export interface NotificationApiModel {
    id: string;
    notification: {
        title: string;
        body: string;
    };
    message: string;
    messageData: Record<string, any>;
    userToken: string;
    userId: string;
    markedAsRead: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}