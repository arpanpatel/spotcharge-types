import {Timestamp} from "../timestamp";
import {CreatedByModel} from "../created-by.model";
import {SettlementStatus} from "../../enum/settlement-status.enum";

export interface SettlementApiModel {
    id: string;
    businessUnitId: string;
    companyId: string;
    businessUnitName: string;
    periodStart: Timestamp;
    periodEnd: Timestamp;
    totalRevenue: number;
    platformAmount: number;
    clientAmount: number;
    invoiceCount: number;
    status: SettlementStatus;
    paidAmount: number;
    paymentReference?: string;
    paidAt?: Timestamp | null;
    notes?: string;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    isDeleted: boolean;
    deletedAt: Timestamp | null;
}
