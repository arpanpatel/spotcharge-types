import {ConnectorStatus} from "../enum";

export interface ConnectorModel {
    name: number;
    status: ConnectorStatus;
    capacity: string;
    unitRate: number;
}