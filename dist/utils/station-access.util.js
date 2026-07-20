"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationHasFleetAccess = exports.FLEET_STATION_ACCESS_TYPES = exports.stationHasConsumerAccess = exports.mapCapabilitiesAccessToAccessType = exports.CONSUMER_STATION_ACCESS_TYPES = void 0;
var enum_1 = require("../enum");
var CAPABILITY_TO_ACCESS_TYPE = (_a = {},
    _a[enum_1.StationAccessCapability.Public] = enum_1.StationAccessType.Public,
    _a[enum_1.StationAccessCapability.Fleet] = enum_1.StationAccessType.Fleet,
    _a[enum_1.StationAccessCapability.ResidentsOnly] = enum_1.StationAccessType.ResidentsOnly,
    _a);
/** Station access types visible in consumer discovery (map/search). */
exports.CONSUMER_STATION_ACCESS_TYPES = [
    enum_1.StationAccessType.Public,
    enum_1.StationAccessType.ResidentsOnly,
];
/** Maps legacy capabilities.access values to station accessType for migration backfill. */
function mapCapabilitiesAccessToAccessType(capabilitiesAccess) {
    if (!(capabilitiesAccess === null || capabilitiesAccess === void 0 ? void 0 : capabilitiesAccess.length)) {
        return [];
    }
    var mapped = new Set();
    for (var _i = 0, capabilitiesAccess_1 = capabilitiesAccess; _i < capabilitiesAccess_1.length; _i++) {
        var capability = capabilitiesAccess_1[_i];
        var accessType = CAPABILITY_TO_ACCESS_TYPE[capability];
        if (accessType) {
            mapped.add(accessType);
        }
    }
    return Array.from(mapped);
}
exports.mapCapabilitiesAccessToAccessType = mapCapabilitiesAccessToAccessType;
function stationHasConsumerAccess(accessType) {
    if (!(accessType === null || accessType === void 0 ? void 0 : accessType.length)) {
        return false;
    }
    return accessType.some(function (type) { return exports.CONSUMER_STATION_ACCESS_TYPES.indexOf(type) !== -1; });
}
exports.stationHasConsumerAccess = stationHasConsumerAccess;
/** Station access types used for fleet-operated locations. */
exports.FLEET_STATION_ACCESS_TYPES = [
    enum_1.StationAccessType.Fleet,
    enum_1.StationAccessType.Private,
];
function stationHasFleetAccess(accessType) {
    if (!(accessType === null || accessType === void 0 ? void 0 : accessType.length)) {
        return false;
    }
    return accessType.some(function (type) { return exports.FLEET_STATION_ACCESS_TYPES.indexOf(type) !== -1; });
}
exports.stationHasFleetAccess = stationHasFleetAccess;
//# sourceMappingURL=station-access.util.js.map