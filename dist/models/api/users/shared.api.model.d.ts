/** ISO 8601 timestamp string for Postgres REST APIs. */
export type IsoDateTime = string;
export interface AdminRoleRefApiModel {
    /** admin_roles.id (uuid). */
    id: string;
    title: string;
    isFullAccess: boolean;
}
export interface AuditTimestampsApiModel {
    createdAt: IsoDateTime;
    updatedAt: IsoDateTime;
    deletedAt: IsoDateTime | null;
}
export interface PermissionCatalogItemApiModel {
    key: string;
    label: string;
    order: number;
    /** permission_groups.id (uuid). */
    groupId: string;
}
//# sourceMappingURL=shared.api.model.d.ts.map