// export const VehiclePurpose = {
//     General: "General",
//     Delivery: "Delivery",
//     Maintenance: "Maintenance",
//     Charging: "Charging",
//     Inspection: "Inspection",
//     Emergency: "Emergency"
// } as const;

export const VehiclePurpose = {
    GENERAL: {
        id: 'general',
        name: 'General',
    },
    DELIVERY: {
        id: 'delivery',
        name: 'Delivery',
    },
    MAINTENANCE: {
        id: 'maintenance',
        name: 'Maintenance',
    },
    CHARGING: {
        id: 'charging',
        name: 'Charging',
    },
    INSPECTION: {
        id: 'inspection',
        name: 'Inspection',
    },
    EMERGENCY: {
        id: 'emergency',
        name: 'Emergency',
    },
} as const;

// Derive type from the const object
export type VehiclePurposeType = keyof typeof VehiclePurpose;

export type VehiclePurposeDetailType = (typeof VehiclePurpose)[keyof typeof VehiclePurpose];