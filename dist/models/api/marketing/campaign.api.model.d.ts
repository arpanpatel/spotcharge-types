import { ConnectorOutputType, PromotionAdjustmentType, PromotionAppliesTo, CampaignScopeType } from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';
export interface CampaignAdjustmentApiModel {
    type: PromotionAdjustmentType;
    value: number;
}
/** GET /api/campaigns */
export type CampaignListOrderBy = 'validFrom' | 'createdAt' | 'name';
export type CampaignStatus = 'draft' | 'active' | 'scheduled' | 'ended';
export interface CampaignListItemApiModel {
    id: string;
    name: string;
    label: string | null;
    scopeType: CampaignScopeType;
    stationCount: number;
    outputType: ConnectorOutputType | null;
    appliesTo: PromotionAppliesTo;
    energyAdjustment: CampaignAdjustmentApiModel | null;
    sessionAdjustment: CampaignAdjustmentApiModel | null;
    validFrom: IsoDateTime;
    validTo: IsoDateTime | null;
    priority: number;
    isActive: boolean;
    status: CampaignStatus;
    createdAt: IsoDateTime;
}
export interface CampaignListApiModel {
    rows: CampaignListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    orderBy: CampaignListOrderBy;
    sortDirection: ApiSortDirection;
}
export interface CampaignDetailApiModel extends CampaignListItemApiModel, AuditTimestampsApiModel {
    isDeleted: boolean;
    createdBy: AuditActor | null;
    updatedBy: AuditActor | null;
    deletedBy: AuditActor | null;
}
export interface CreateCampaignRequest {
    name: string;
    label?: string | null;
    scopeType: CampaignScopeType;
    outputType?: ConnectorOutputType | null;
    appliesTo: PromotionAppliesTo;
    energyAdjustment?: CampaignAdjustmentApiModel | null;
    sessionAdjustment?: CampaignAdjustmentApiModel | null;
    validFrom?: IsoDateTime;
    validTo?: IsoDateTime | null;
    priority?: number;
    isActive?: boolean;
}
export interface UpdateCampaignRequest {
    name?: string;
    label?: string | null;
    scopeType?: CampaignScopeType;
    outputType?: ConnectorOutputType | null;
    appliesTo?: PromotionAppliesTo;
    energyAdjustment?: CampaignAdjustmentApiModel | null;
    sessionAdjustment?: CampaignAdjustmentApiModel | null;
    validFrom?: IsoDateTime;
    validTo?: IsoDateTime | null;
    priority?: number;
    isActive?: boolean;
}
export interface UpdateCampaignStationsRequest {
    stationIds: string[];
}
export interface UpdateCampaignStationsResponse {
    stationCount: number;
    invalidStationIds?: string[];
}
export interface CampaignStationListItemApiModel {
    stationId: string;
    stationName: string;
    stationCode: string | null;
    assignedAt: IsoDateTime;
}
export interface CampaignStationListApiModel {
    rows: CampaignStationListItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
}
//# sourceMappingURL=campaign.api.model.d.ts.map