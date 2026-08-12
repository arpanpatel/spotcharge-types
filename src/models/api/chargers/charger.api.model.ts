import {
  ChargerOperationalState,
  ChargerPhysicalState,
  ChargerStatus,
  ConnectorStatus,
  ConnectorType,
} from '../../../enum';
import { AuditActor } from '../../audit-actor.model';
import { ApiSortDirection } from '../users/admin-user.api.model';
import { AuditTimestampsApiModel, IsoDateTime } from '../users/shared.api.model';

/** Derived session gate for consumer/fleet charger APIs. */
export type SessionEligibility = 'eligible' | 'ineligible';

export type SessionIneligibilityReason =
  | 'not_assigned'
  | 'station_inactive'
  | 'not_installed'
  | 'under_maintenance'
  | 'out_of_service'
  | 'offline'
  | 'connector_inactive'
  | 'connector_faulted'
  | 'connector_unavailable'
  | 'fleet_not_visible'
  | 'access_denied';

/** Slim connector DTO on Postgres charger read APIs. */
export interface ConnectorApiModel {
  /** Postgres `infrastructure.connectors.id` (UUID). */
  id: string;
  connectorNo: number;
  outputType: 'AC' | 'DC';
  connectorType: ConnectorType;
  ratedPowerKw: string;
  /** Postgres `master.power_levels.id` — snapshotted kW/output type at provision time. */
  powerLevelId: string | null;
  name: string | null;
  qrCodeId: string | null;
  isActive: boolean;
  ocppStatus: ConnectorStatus;
  unitRate: string | null;
  isManualPricing: boolean;
  lastStatusAt: IsoDateTime | null;
}

/** Shared slim charger fields across list/detail/picker DTOs. */
export interface ChargerCoreApiModel {
  /** Postgres `infrastructure.chargers.id` (UUID). */
  id: string;
  /** OCPP charge point identity (`charge_point_id`). */
  chargePointId: string;
  assetState: ChargerPhysicalState;
  operationalMode: ChargerOperationalState;
  connectivityStatus: ChargerStatus;
}

/** GET /api/admin/chargers — list row. */
export interface ChargerListItemApiModel extends ChargerCoreApiModel {
  name: string;
  stationId: string | null;
  stationName: string | null;
  stationCode: string | null;
  connectorCount: number;
  vendorName: string | null;
  createdAt: IsoDateTime;
}

/** GET /api/admin/chargers/:id — admin detail. */
export interface ChargerAdminDetailApiModel
  extends ChargerListItemApiModel,
    AuditTimestampsApiModel {
  protocol: string | null;
  isServiceChargeApplicable: boolean;
  firmwareVersion: string | null;
  onlineAt: IsoDateTime | null;
  lastSeen: IsoDateTime | null;
  lastChargeAt: IsoDateTime | null;
  isDeleted: boolean;
  createdBy: AuditActor | null;
  updatedBy: AuditActor | null;
  deletedBy: AuditActor | null;
  vendor: { id: string; name: string } | null;
  connectors: ConnectorApiModel[];
}

/** GET /api/stations/:stationId/chargers — consumer detail row. */
export interface ChargerPublicDetailApiModel extends ChargerListItemApiModel {
  connectors: ConnectorApiModel[];
  sessionEligibility: SessionEligibility;
  sessionIneligibilityReason?: SessionIneligibilityReason;
}

/** GET /api/admin/chargers/picker — admin autocomplete row. */
export interface ChargerPickerItemApiModel {
  id: string;
  chargePointId: string;
  name: string;
  stationId: string | null;
  stationName: string | null;
  operationalMode: ChargerOperationalState;
  assetState: ChargerPhysicalState;
}

export type ChargerListOrderBy =
  | 'name'
  | 'chargePointId'
  | 'createdAt'
  | 'operationalMode'
  | 'connectivityStatus'
  | 'assetState';

/** GET /api/admin/chargers — paginated list. */
export interface ChargerListApiModel {
  rows: ChargerListItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  orderBy: ChargerListOrderBy;
  sortDirection: ApiSortDirection;
}

/** GET /api/admin/chargers/picker — paginated picker list. */
export interface ChargerPickerListApiModel {
  rows: ChargerPickerItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
}

/** Connector row on POST /api/admin/chargers (optional nested create). */
export interface CreateConnectorRequest {
  connectorNo: number;
  outputType?: 'AC' | 'DC';
  connectorType: ConnectorType;
  ratedPowerKw?: number | string;
  powerLevelId?: string | null;
  name?: string | null;
  qrCodeId?: string | null;
  isActive?: boolean;
  unitRate?: number | string | null;
  isManualPricing?: boolean;
}

/** POST /api/admin/chargers */
export interface CreateChargerRequest {
  name: string;
  vendorId?: string | null;
  protocol?: string | null;
  assetState?: ChargerPhysicalState;
  operationalMode?: ChargerOperationalState;
  stationId?: string | null;
  isServiceChargeApplicable?: boolean;
  connectors?: CreateConnectorRequest[];
}

/** PATCH /api/admin/chargers/:id — chargePointId and connectivityStatus are server-managed. */
export interface UpdateChargerRequest {
  name?: string;
  vendorId?: string | null;
  protocol?: string | null;
  assetState?: ChargerPhysicalState;
  operationalMode?: ChargerOperationalState;
  stationId?: string | null;
  isServiceChargeApplicable?: boolean;
}
