"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStationFirestoreRefIds = exports.getStationLegacyId = exports.getStationCanonicalId = void 0;
/** Postgres UUID — preferred runtime identifier after Phase A3 client adoption. */
function getStationCanonicalId(station) {
    var _a;
    return (_a = station.uuid) !== null && _a !== void 0 ? _a : station.id;
}
exports.getStationCanonicalId = getStationCanonicalId;
/** Legacy Firestore document id (same as JSON `id` before Phase A4 flip). */
function getStationLegacyId(station) {
    var _a;
    return (_a = station.legacyFirestoreId) !== null && _a !== void 0 ? _a : station.id;
}
exports.getStationLegacyId = getStationLegacyId;
/** Both ids for Firestore `stationId` queries during the ACL/charger backfill transition window. */
function getStationFirestoreRefIds(station) {
    var canonical = getStationCanonicalId(station);
    var legacy = getStationLegacyId(station);
    return canonical === legacy ? [canonical] : [canonical, legacy];
}
exports.getStationFirestoreRefIds = getStationFirestoreRefIds;
//# sourceMappingURL=station-id.util.js.map