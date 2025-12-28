import { ConnectorStatus } from "../../enum";
import { ConnectorTypeModel } from "../connector-type.model";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";

export interface ConnectorApiModel {
    id: string;               // Firestore document ID (unique)
    connectorId: number;      // OCPP connector number (1, 2, 3, …)
    name: string;             // Human label for UI

    connectorType: ConnectorTypeModel;         // Connector standard: e.g., "Type2", "CCS2", "CHAdeMO"
    
    outputType: "AC" | "DC"; // Clearly AC or DC — easy to filter & use

    capacity: string; // reference to charger capacity document ID
    unitRate: number;
    status: ConnectorStatus;  // Current connector status

    isActive: boolean;        // Enabled/disabled flag
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}