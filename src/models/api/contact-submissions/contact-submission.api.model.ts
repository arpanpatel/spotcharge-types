import { AuditTimestampsApiModel, ApiSortDirection } from '../users';

export enum ContactSubmissionStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

/** GET /api/contact-submissions */
export type ContactSubmissionListOrderBy = 'firstName' | 'lastName' | 'email' | 'createdAt';

export interface ContactSubmissionListItemApiModel {
  /** contact_submissions.id (uuid). */
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  status: ContactSubmissionStatus | string;
  source: string;
  createdAt: string;
}

/** GET /api/contact-submissions — paginated list response */
export interface ContactSubmissionListApiModel {
  rows: ContactSubmissionListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: ContactSubmissionListOrderBy;
  sortDirection: ApiSortDirection;
}

/** GET /api/contact-submissions/:id */
export interface ContactSubmissionDetailApiModel
  extends Omit<ContactSubmissionListItemApiModel, 'createdAt'>,
    AuditTimestampsApiModel {
  legacyFirestoreId?: string | null;
  isDeleted: boolean;
}

/** POST /api/contact-submissions */
export interface CreateContactSubmissionRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  /** Defaults to `website` when omitted. */
  source?: string;
}

/** PATCH /api/contact-submissions/:id */
export interface UpdateContactSubmissionRequest {
  status?: ContactSubmissionStatus | string;
  source?: string;
}
