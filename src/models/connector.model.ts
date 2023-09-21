import {ConnectorStatus} from "../enum";
import {ChargerCapacity} from "./charger-capacity.model";

export interface ConnectorModel {
    name: number;
    status: ConnectorStatus;
    capacity: string | ChargerCapacity;
    unitRate: number;
}
