import { StationSearchApiModel, StationSearchIdentity } from './station-search.api.model';
export type { StationSearchIdentity } from './station-search.api.model';
/** Meilisearch payload before roaming/owned identity is applied. */
export type StationSearchDocumentCore = Omit<StationSearchApiModel, keyof StationSearchIdentity>;
/** SpotCharge-operated station defaults for the shared `stations` index. */
export declare function withOwnedStationSearchIdentity(document: StationSearchDocumentCore): StationSearchApiModel;
/** OCPI partner location defaults for the shared `stations` index. */
export declare function withOcpiPartnerSearchIdentity(document: StationSearchDocumentCore, owner: {
    partyId: string;
    countryCode: string;
}): StationSearchApiModel;
//# sourceMappingURL=station-search-document.util.d.ts.map