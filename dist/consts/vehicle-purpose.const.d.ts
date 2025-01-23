export declare const VehiclePurpose: {
    readonly GENERAL: {
        readonly id: "general";
        readonly name: "General";
    };
    readonly DELIVERY: {
        readonly id: "delivery";
        readonly name: "Delivery";
    };
    readonly MAINTENANCE: {
        readonly id: "maintenance";
        readonly name: "Maintenance";
    };
    readonly CHARGING: {
        readonly id: "charging";
        readonly name: "Charging";
    };
    readonly INSPECTION: {
        readonly id: "inspection";
        readonly name: "Inspection";
    };
    readonly EMERGENCY: {
        readonly id: "emergency";
        readonly name: "Emergency";
    };
};
export type VehiclePurposeType = keyof typeof VehiclePurpose;
export type VehiclePurposeDetailType = (typeof VehiclePurpose)[keyof typeof VehiclePurpose];
//# sourceMappingURL=vehicle-purpose.const.d.ts.map