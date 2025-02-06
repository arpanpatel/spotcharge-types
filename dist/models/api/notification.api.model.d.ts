import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export interface NotificationApiModel {
    id: string;
    notification?: {
        title: string;
        body: string;
    };
    android?: {
        priority: 'high' | 'normal';
    };
    data?: Record<string, any>;
    message: string;
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
//# sourceMappingURL=notification.api.model.d.ts.map