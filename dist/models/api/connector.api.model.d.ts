import { ConnectorStatus, ConnectorType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface ConnectorApiModel {
    id: string;
    connectorNo: number;
    name: string;
    connectorType: ConnectorType;
    outputType: "AC" | "DC";
    capacity: string;
    unitRate: number;
    isManualPricing?: boolean;
    status: ConnectorStatus;
    qrCodeId?: string;
    isActive: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=connector.api.model.d.ts.map