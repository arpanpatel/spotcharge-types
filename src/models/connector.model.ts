import {ConnectorStatus} from "../enum";

export interface ConnectorModel {
  name: string;
  status: ConnectorStatus;
  capacity: number;
  unitRate: number;
}