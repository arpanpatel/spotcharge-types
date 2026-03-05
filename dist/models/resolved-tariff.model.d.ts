import { TariffScope } from "../enum/tariff-scope.enum";
import { Timestamp } from "./timestamp";
import { RateDuration } from "./rate-duration.model";
export interface ResolvedTariff {
    tariffId: string | null;
    tariffName: string;
    assignmentId: string | null;
    scope: TariffScope | 'connector_override';
    energyRate: number;
    serviceCharge?: {
        rate: number;
        rateDuration: RateDuration;
    } | null;
    resolvedAt: Timestamp;
}
//# sourceMappingURL=resolved-tariff.model.d.ts.map