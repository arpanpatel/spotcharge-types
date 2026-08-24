export const CampaignScopeType = {
  Global: 'global',
  Stations: 'stations',
} as const;

export type CampaignScopeType =
  (typeof CampaignScopeType)[keyof typeof CampaignScopeType];
