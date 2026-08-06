import { StationStatus } from '../../../enum';
/** GET /api/admin/stations/picker — autocomplete / admin search row. */
export interface StationPickerItemApiModel {
    id: string;
    name: string;
    stationCode: string;
    status: StationStatus;
    city: string;
    stateName: string;
    companyId: string | null;
    businessUnitId: string | null;
}
export interface StationPickerListApiModel {
    rows: StationPickerItemApiModel[];
    totalCount: number;
    pageIndex: number;
    pageSize: number;
}
//# sourceMappingURL=station-picker.api.model.d.ts.map