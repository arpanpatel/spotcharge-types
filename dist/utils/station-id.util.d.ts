/** Minimal shape for resolving canonical vs legacy station identifiers during Phase 2 migration. */
export interface StationPublicIds {
    id: string;
    uuid?: string;
    legacyFirestoreId?: string;
}
/** Postgres UUID — preferred runtime identifier after Phase A3 client adoption. */
export declare function getStationCanonicalId(station: StationPublicIds): string;
/** Legacy Firestore document id (same as JSON `id` before Phase A4 flip). */
export declare function getStationLegacyId(station: StationPublicIds): string;
/** Both ids for Firestore `stationId` queries during the ACL/charger backfill transition window. */
export declare function getStationFirestoreRefIds(station: StationPublicIds): string[];
//# sourceMappingURL=station-id.util.d.ts.map