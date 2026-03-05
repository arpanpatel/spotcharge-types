import {TariffScope} from "../enum/tariff-scope.enum";
import {Timestamp} from "./timestamp";
import {RateDuration} from "./rate-duration.model";

export interface ResolvedTariff {
    tariffId: string | null;           // null if connector override was used
    tariffName: string;
    assignmentId: string | null;       // null if connector override
    scope: TariffScope | 'connector_override';
    energyRate: number;                // effective ₹/kWh
    serviceCharge?: {
        rate: number;
        rateDuration: RateDuration;
    } | null;
    resolvedAt: Timestamp;
}
