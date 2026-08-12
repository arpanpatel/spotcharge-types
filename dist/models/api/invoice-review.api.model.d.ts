import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export interface InvoiceReviewApiModel {
    id: string;
    invoiceId: string;
    invoiceNo: number;
    stationId: string;
    customerName: string;
    /** Postgres `infrastructure.chargers.id` (UUID). */
    chargerId: string;
    /** OCPP charge point identity. */
    chargePointId: string;
    /** @deprecated Firestore doc id — removed after historical backfill. */
    chargerDocId?: string;
    userId: string;
    rating: number;
    feedback: string;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
}
//# sourceMappingURL=invoice-review.api.model.d.ts.map