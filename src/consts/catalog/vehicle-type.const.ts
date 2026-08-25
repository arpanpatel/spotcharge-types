export const VehicleTypeCatalog = {
  Car: 'car',
  Bike: 'bike',
  Rikshaw: 'rikshaw',
  Pickup: 'pickup',
} as const;

export type VehicleTypeCatalog =
  (typeof VehicleTypeCatalog)[keyof typeof VehicleTypeCatalog];
