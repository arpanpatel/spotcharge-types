import {
  FeeComponentType,
  FeeUnit,
  ConnectorOutputType,
  RateDurationUnit,
  TariffRuleType,
} from '../../../enum/pricing';
import { AuditActor } from '../../audit-actor.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';
import { ApiSortDirection } from '../users/admin-user.api.model';

/** GET /api/fee-catalog */
export type FeeCatalogListOrderBy = 'name' | 'componentType' | 'createdAt';

export interface FeeCatalogListItemApiModel {
  id: string;
  name: string;
  componentType: FeeComponentType;
  rate: number;
  unit: FeeUnit;
  rateDurationValue: number | null;
  rateDurationUnit: RateDurationUnit | null;
  createdAt: IsoDateTime;
}

export interface FeeCatalogListApiModel {
  rows: FeeCatalogListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: FeeCatalogListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface FeeCatalogDetailApiModel
  extends FeeCatalogListItemApiModel,
    AuditTimestampsApiModel {
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

export interface CreateFeeCatalogRequest {
  name: string;
  componentType: FeeComponentType;
  rate: number;
  unit: FeeUnit;
  rateDurationValue?: number | null;
  rateDurationUnit?: RateDurationUnit | null;
}

export interface UpdateFeeCatalogRequest {
  name?: string;
  rate?: number;
  unit?: FeeUnit;
  rateDurationValue?: number | null;
  rateDurationUnit?: RateDurationUnit | null;
}

/** Summary embedded on tariff detail/list */
export interface FeeCatalogSummaryApiModel {
  id: string;
  name: string;
  componentType: FeeComponentType;
  rate: number;
  unit: FeeUnit;
  rateDurationValue: number | null;
  rateDurationUnit: RateDurationUnit | null;
}

/** GET /api/tariffs */
export type TariffListOrderBy = 'name' | 'tariffCode' | 'createdAt';

export interface TariffListItemApiModel {
  id: string;
  tariffCode: string;
  name: string;
  description: string | null;
  isActive: boolean;
  components: FeeCatalogSummaryApiModel[];
  createdAt: IsoDateTime;
}

export interface TariffListApiModel {
  rows: TariffListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: TariffListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface TariffDetailApiModel extends TariffListItemApiModel, AuditTimestampsApiModel {
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

export interface CreateTariffRequest {
  name: string;
  description?: string | null;
  isActive?: boolean;
  /** Fee catalog IDs — exactly one energy, at most one session */
  feeCatalogIds: string[];
}

export interface UpdateTariffRequest {
  name?: string;
  description?: string | null;
  isActive?: boolean;
  feeCatalogIds?: string[];
}

/** GET /api/tariff-rules */
export type TariffRuleListOrderBy = 'validFrom' | 'createdAt';

export interface TariffRuleListItemApiModel {
  id: string;
  ruleType: TariffRuleType;
  tariffId: string;
  tariffName: string;
  stationId: string | null;
  stationName: string | null;
  outputType: ConnectorOutputType | null;
  validFrom: IsoDateTime;
  validTo: IsoDateTime | null;
  isActive: boolean;
  createdAt: IsoDateTime;
}

export interface TariffRuleListApiModel {
  rows: TariffRuleListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: TariffRuleListOrderBy;
  sortDirection: ApiSortDirection;
}

export interface TariffRuleDetailApiModel
  extends TariffRuleListItemApiModel,
    AuditTimestampsApiModel {
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
}

export interface CreateTariffRuleRequest {
  ruleType: TariffRuleType;
  tariffId: string;
  stationId?: string | null;
  outputType?: ConnectorOutputType | null;
  validFrom?: IsoDateTime;
  validTo?: IsoDateTime | null;
  isActive?: boolean;
}

export interface UpdateTariffRuleRequest {
  tariffId?: string;
  stationId?: string | null;
  outputType?: ConnectorOutputType | null;
  validFrom?: IsoDateTime;
  validTo?: IsoDateTime | null;
  isActive?: boolean;
}
