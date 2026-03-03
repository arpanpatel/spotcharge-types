import { ConnectorStatus, ConnectorType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";

export interface ConnectorApiModel {
    id: string;               // Firestore document ID (unique)
    connectorNo: number;      // OCPP connector number (1, 2, 3, …)
    name: string;             // Human label for UI

    connectorType: ConnectorType;  // Connector standard: e.g., "Type2", "CCS2", "CHAdeMO"
    outputType: "AC" | "DC"; // Clearly AC or DC — easy to filter & use

    capacity: string; // reference to charger capacity document ID
    unitRate: number;
    status: ConnectorStatus;  // Current connector status

    qrCodeId?: string;        // Stable QR code identifier (nanoid), immutable after creation
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