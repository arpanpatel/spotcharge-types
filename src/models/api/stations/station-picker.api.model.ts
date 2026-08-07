import { StationStatus } from '../../../enum';

/** GET /api/admin/stations/picker — autocomplete / admin search row. */
export interface StationPickerItemApiModel {
  id: string;
  name: string;
  stationCode: string;
  status: StationStatus;
  city: string | null;
  stateName: string | null;
  /** Human-readable location for picker UI; null when address was not captured. */
  locationLabel: string | null;
  companyId: string | null;
  businessUnitId: string | null;
}

export interface StationPickerListApiModel {
  rows: StationPickerItemApiModel[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
}
