import { StationAccessCapability, StationAccessType } from '../enum';
/** Station access types visible in consumer discovery (map/search). */
export declare const CONSUMER_STATION_ACCESS_TYPES: StationAccessType[];
/** Maps legacy capabilities.access values to station accessType for migration backfill. */
export declare function mapCapabilitiesAccessToAccessType(capabilitiesAccess: StationAccessCapability[] | string[] | undefined | null): StationAccessType[];
export declare function stationHasConsumerAccess(accessType: StationAccessType[] | undefined | null): boolean;
/** Station access types used for fleet-operated locations. */
export declare const FLEET_STATION_ACCESS_TYPES: StationAccessType[];
export declare function stationHasFleetAccess(accessType: StationAccessType[] | undefined | null): boolean;
//# sourceMappingURL=station-access.util.d.ts.map