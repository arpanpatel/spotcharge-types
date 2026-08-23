export const PromotionScopeType = {
  Global: 'global',
  Station: 'station',
  Charger: 'charger',
  Connector: 'connector',
} as const;

export type PromotionScopeType =
  (typeof PromotionScopeType)[keyof typeof PromotionScopeType];
