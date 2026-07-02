"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withOcpiPartnerSearchIdentity = exports.withOwnedStationSearchIdentity = void 0;
var station_search_source_enum_1 = require("../../enum/station-search-source.enum");
/** SpotCharge-operated station defaults for the shared `stations` index. */
function withOwnedStationSearchIdentity(document) {
    return __assign(__assign({}, document), { source: station_search_source_enum_1.StationSearchSource.Owned, isRoaming: false, ownerPartyId: null, ownerCountryCode: null });
}
exports.withOwnedStationSearchIdentity = withOwnedStationSearchIdentity;
/** OCPI partner location defaults for the shared `stations` index. */
function withOcpiPartnerSearchIdentity(document, owner) {
    return __assign(__assign({}, document), { source: station_search_source_enum_1.StationSearchSource.Ocpi, isRoaming: true, ownerPartyId: owner.partyId, ownerCountryCode: owner.countryCode });
}
exports.withOcpiPartnerSearchIdentity = withOcpiPartnerSearchIdentity;
//# sourceMappingURL=station-search-document.util.js.map