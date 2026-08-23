export const PromotionAppliesTo = {
  Energy: 'energy',
  Session: 'session',
  Both: 'both',
} as const;

export type PromotionAppliesTo =
  (typeof PromotionAppliesTo)[keyof typeof PromotionAppliesTo];
