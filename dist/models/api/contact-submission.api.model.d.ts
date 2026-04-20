import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export interface ContactSubmissionApiModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    source: string;
    status: string;
    createdBy?: CreatedByModel | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=contact-submission.api.model.d.ts.map