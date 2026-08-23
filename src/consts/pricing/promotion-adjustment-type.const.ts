export const PromotionAdjustmentType = {
  SetPrice: 'set_price',
  AmountOff: 'amount_off',
  PercentOff: 'percent_off',
} as const;

export type PromotionAdjustmentType =
  (typeof PromotionAdjustmentType)[keyof typeof PromotionAdjustmentType];
