import {Timestamp} from "../timestamp";
import {CreatedByModel} from "../created-by.model";
import {AppType} from "../../enum";

export interface NotificationApiModel {
    id: string;
    notification?: {
        title: string;
        body: string;
    };
    android?: {
        priority: 'high' | 'normal';
    },
    appType?: AppType,
    data?: Record<string, any>;
    message: string;
    userTokens: string[];
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
