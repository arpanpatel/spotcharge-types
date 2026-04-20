import {Timestamp} from "../timestamp";

export interface ContactSubmissionApiModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    source: string;
    status: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
