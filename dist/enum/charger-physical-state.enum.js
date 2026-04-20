"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargerPhysicalState = void 0;
var ChargerPhysicalState;
(function (ChargerPhysicalState) {
    ChargerPhysicalState["Installed"] = "installed";
    // Physically mounted and wired at a station
    ChargerPhysicalState["InStock"] = "in_stock";
    // Approved and stored in warehouse. ready for deployment
    ChargerPhysicalState["InTransit"] = "in_transit";
    // Being transported between locations (e.g. warehouse ↔ station)
    ChargerPhysicalState["UnderRepair"] = "under_repair";
    // At repair facility or under technical work
    ChargerPhysicalState["Decommissioned"] = "decommissioned";
    // Permanently removed from operation. not expected to return to service
})(ChargerPhysicalState = exports.ChargerPhysicalState || (exports.ChargerPhysicalState = {}));
//# sourceMappingURL=charger-physical-state.enum.js.map