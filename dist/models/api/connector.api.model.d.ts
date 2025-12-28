import { ConnectorStatus } from "../../enum";
import { ConnectorTypeModel } from "../connector-type.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface ConnectorApiModel {
    id: string;
    connectorId: number;
    name: string;
    connectorType: ConnectorTypeModel;
    outputType: "AC" | "DC";
    capacity: string;
    unitRate: number;
    status: ConnectorStatus;
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