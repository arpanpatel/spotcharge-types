import {
  ConnectorOutputType,
  PromotionAdjustmentType,
  PromotionAppliesTo,
  PromotionScopeType,
} from '../../../enum/pricing';
import { AuditActor } from '../../audit-actor.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';

export interface PromotionAdjustmentApiModel {
  type: PromotionAdjustmentType;
  value: number;
}

/** GET /api/promotions */
export type PromotionListOrderBy = 'validFrom' | 'createdAt' | 'name';

export interface PromotionListItemApiModel {
  id: string;
  name: string;
  label: string | null;
  scopeType: PromotionScopeType;
  stationId: string | null;
  stationName: string | null;
  chargerId: string | null;
  connectorId: string | null;
  outputType: ConnectorOutputType | null;
  appliesTo: PromotionAppliesTo;
  energyAdjustment: PromotionAdjustmentApiModel | null;
  sessionAdjustment: PromotionAdjustmentApiModel | null;
  validFrom: IsoDateTime;
  validTo: IsoDateTime | null;
  priority: number;
  isActive: boolean;
  createdAt: IsoDateTime;
}

export interface PromotionListApiModel {
  rows: PromotionListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: PromotionListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface PromotionDetailApiModel
  extends PromotionListItemApiModel,
    AuditTimestampsApiModel {
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

export interface CreatePromotionRequest {
  name: string;
  label?: string | null;
  scopeType: PromotionScopeType;
  stationId?: string | null;
  chargerId?: string | null;
  connectorId?: string | null;
  outputType?: ConnectorOutputType | null;
  appliesTo: PromotionAppliesTo;
  energyAdjustment?: PromotionAdjustmentApiModel | null;
  sessionAdjustment?: PromotionAdjustmentApiModel | null;
  validFrom?: IsoDateTime;
  validTo?: IsoDateTime | null;
  priority?: number;
  isActive?: boolean;
}

export interface UpdatePromotionRequest {
  name?: string;
  label?: string | null;
  stationId?: string | null;
  chargerId?: string | null;
  connectorId?: string | null;
  outputType?: ConnectorOutputType | null;
  appliesTo?: PromotionAppliesTo;
  energyAdjustment?: PromotionAdjustmentApiModel | null;
  sessionAdjustment?: PromotionAdjustmentApiModel | null;
  validFrom?: IsoDateTime;
  validTo?: IsoDateTime | null;
  priority?: number;
  isActive?: boolean;
}
