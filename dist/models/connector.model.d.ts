import { ConnectorStatus } from "../enum";
import { ChargerCapacityModel } from "./charger-capacity.model";
export interface ConnectorModel {
    name: number;
    status: ConnectorStatus;
    capacity: ChargerCapacityModel;
    unitRate: number;
}
//# sourceMappingURL=connector.model.d.ts.map