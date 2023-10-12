import {ConnectorStatus} from "../enum";
import {ChargerCapacity} from "./charger-capacity.model";
import {ConnectorTypeModel} from "./connector-type.model";

export interface ConnectorModel {
    name: number;
    status: ConnectorStatus;
    capacity: string | ChargerCapacity;
    unitRate: number;
    type: ConnectorTypeModel;
}
