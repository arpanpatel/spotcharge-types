"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStationLegacyId = exports.getStationFirestoreRefIds = exports.getStationCanonicalId = exports.stationHasFleetAccess = exports.stationHasConsumerAccess = exports.mapCapabilitiesAccessToAccessType = exports.FLEET_STATION_ACCESS_TYPES = exports.CONSUMER_STATION_ACCESS_TYPES = void 0;
var station_access_util_1 = require("./station-access.util");
Object.defineProperty(exports, "CONSUMER_STATION_ACCESS_TYPES", { enumerable: true, get: function () { return station_access_util_1.CONSUMER_STATION_ACCESS_TYPES; } });
Object.defineProperty(exports, "FLEET_STATION_ACCESS_TYPES", { enumerable: true, get: function () { return station_access_util_1.FLEET_STATION_ACCESS_TYPES; } });
Object.defineProperty(exports, "mapCapabilitiesAccessToAccessType", { enumerable: true, get: function () { return station_access_util_1.mapCapabilitiesAccessToAccessType; } });
Object.defineProperty(exports, "stationHasConsumerAccess", { enumerable: true, get: function () { return station_access_util_1.stationHasConsumerAccess; } });
Object.defineProperty(exports, "stationHasFleetAccess", { enumerable: true, get: function () { return station_access_util_1.stationHasFleetAccess; } });
var station_id_util_1 = require("./station-id.util");
Object.defineProperty(exports, "getStationCanonicalId", { enumerable: true, get: function () { return station_id_util_1.getStationCanonicalId; } });
Object.defineProperty(exports, "getStationFirestoreRefIds", { enumerable: true, get: function () { return station_id_util_1.getStationFirestoreRefIds; } });
Object.defineProperty(exports, "getStationLegacyId", { enumerable: true, get: function () { return station_id_util_1.getStationLegacyId; } });
//# sourceMappingURL=index.js.map