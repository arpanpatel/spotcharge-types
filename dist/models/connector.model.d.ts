import { ConnectorStatus } from "../enum";
import { MasterData } from "./master-data.model";
export interface ConnectorModel {
    name: number;
    status: ConnectorStatus;
    capacity: MasterData;
    unitRate: number;
}
//# sourceMappingURL=connector.model.d.ts.map