/** Minimal shape for resolving canonical vs legacy station identifiers during Phase 2 migration. */
export interface StationPublicIds {
  id: string;
  uuid?: string;
  legacyFirestoreId?: string;
}

/** Postgres UUID — preferred runtime identifier after Phase A3 client adoption. */
export function getStationCanonicalId(station: StationPublicIds): string {
  return station.uuid ?? station.id;
}

/** Legacy Firestore document id (same as JSON `id` before Phase A4 flip). */
export function getStationLegacyId(station: StationPublicIds): string {
  return station.legacyFirestoreId ?? station.id;
}

/** Both ids for Firestore `stationId` queries during the ACL/charger backfill transition window. */
export function getStationFirestoreRefIds(station: StationPublicIds): string[] {
  const canonical = getStationCanonicalId(station);
  const legacy = getStationLegacyId(station);
  return canonical === legacy ? [canonical] : [canonical, legacy];
}
