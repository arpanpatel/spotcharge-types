export const CatalogErrorCode = {
  VehicleBrandNameTaken: 'VEHICLE_BRAND_NAME_TAKEN',
  VehicleModelTaken: 'VEHICLE_MODEL_TAKEN',
} as const;

export type CatalogErrorCode =
  (typeof CatalogErrorCode)[keyof typeof CatalogErrorCode];
