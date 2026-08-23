import {PromotionAdjustmentType, PromotionAppliesTo} from "../enum/pricing";
import {TariffScope} from "../enum/tariff-scope.enum";
import {Timestamp} from "./timestamp";
import {RateDuration} from "./rate-duration.model";

export interface ResolvedPromotionAdjustment {
  type: PromotionAdjustmentType;
  value: number;
}

export interface ResolvedPromotionSnapshot {
  id: string;
  name: string;
  label?: string | null;
  appliesTo: PromotionAppliesTo;
  energyAdjustment?: ResolvedPromotionAdjustment;
  sessionAdjustment?: ResolvedPromotionAdjustment;
}

export interface ResolvedTariff {
  tariffId: string;
  tariffName: string;
  assignmentId: string;
  scope: TariffScope;
  /** Effective billable ₹/kWh after promotion. */
  energyRate: number;
  /** Effective session fee after promotion. */
  serviceCharge?: {
    rate: number;
    rateDuration: RateDuration;
  } | null;
  /** Base tariff ₹/kWh before promotion (strike-through). */
  referenceEnergyRate?: number;
  /** Base session fee before promotion (strike-through). */
  referenceServiceCharge?: {
    rate: number;
    rateDuration: RateDuration;
  } | null;
  promotion?: ResolvedPromotionSnapshot | null;
  resolvedAt: Timestamp;
}
