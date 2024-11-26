export const VehiclePurpose = {
    General: "General",
    Delivery: "Delivery",
    Maintenance: "Maintenance",
    Charging: "Charging",
    Inspection: "Inspection",
    Emergency: "Emergency"
} as const;

// Derive type from the const object
export type VehiclePurposeType = keyof typeof VehiclePurpose;
