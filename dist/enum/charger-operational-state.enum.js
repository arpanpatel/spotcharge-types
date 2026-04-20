"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargerOperationalState = void 0;
var ChargerOperationalState;
(function (ChargerOperationalState) {
    ChargerOperationalState["Active"] = "active";
    // Fully operational, available for charging, billing enabled
    ChargerOperationalState["InActive"] = "inActive";
    // Installed but intentionally not usable (business decision)
    ChargerOperationalState["UnderMaintenance"] = "under_maintenance";
    // Scheduled preventive maintenance. temporarily unavailable
    ChargerOperationalState["OutOfService"] = "outOfService";
    // Faulty or unsafe. should not allow charging sessions
})(ChargerOperationalState = exports.ChargerOperationalState || (exports.ChargerOperationalState = {}));
//# sourceMappingURL=charger-operational-state.enum.js.map