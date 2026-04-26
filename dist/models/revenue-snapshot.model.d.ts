import { RevenueModel } from "../enum/revenue-model.enum";
export interface RevenueSnapshot {
    model: RevenueModel;
    platformSharePercent?: number;
    payoutPerUnit?: number;
    baseAmount: number;
    platformAmount: number;
    clientAmount: number;
}
//# sourceMappingURL=revenue-snapshot.model.d.ts.map