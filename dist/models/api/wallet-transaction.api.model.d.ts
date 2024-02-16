import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { TransactionReason, TransactionType } from "../../enum";
export interface WalletTransactionApiModel {
    id: string;
    userId: string;
    amount: number;
    type: TransactionType;
    reason: TransactionReason;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=wallet-transaction.api.model.d.ts.map