/** Postgres admin audit actor — profileId is profiles.id (nullable when unresolved). */
export interface AuditActor {
  profileId: string | null;
  name: string | null;
}
