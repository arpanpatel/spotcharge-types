import {StationAccessCapability, StationAccessType} from '../enum';

const CAPABILITY_TO_ACCESS_TYPE: Record<StationAccessCapability, StationAccessType> = {
  [StationAccessCapability.Public]: StationAccessType.Public,
  [StationAccessCapability.Fleet]: StationAccessType.Fleet,
  [StationAccessCapability.ResidentsOnly]: StationAccessType.ResidentsOnly,
};

/** Station access types visible in consumer discovery (map/search). */
export const CONSUMER_STATION_ACCESS_TYPES: StationAccessType[] = [
  StationAccessType.Public,
  StationAccessType.ResidentsOnly,
];

/** Maps legacy capabilities.access values to station accessType for migration backfill. */
export function mapCapabilitiesAccessToAccessType(
  capabilitiesAccess: StationAccessCapability[] | string[] | undefined | null,
): StationAccessType[] {
  if (!capabilitiesAccess?.length) {
    return [];
  }

  const mapped = new Set<StationAccessType>();
  for (const capability of capabilitiesAccess) {
    const accessType = CAPABILITY_TO_ACCESS_TYPE[capability as StationAccessCapability];
    if (accessType) {
      mapped.add(accessType);
    }
  }

  return Array.from(mapped);
}

export function stationHasConsumerAccess(
  accessType: StationAccessType[] | undefined | null,
): boolean {
  if (!accessType?.length) {
    return false;
  }

  return accessType.some((type) => CONSUMER_STATION_ACCESS_TYPES.indexOf(type) !== -1);
}

/** Station access types used for fleet-operated locations. */
export const FLEET_STATION_ACCESS_TYPES: StationAccessType[] = [
  StationAccessType.Fleet,
  StationAccessType.Private,
];

export function stationHasFleetAccess(
  accessType: StationAccessType[] | undefined | null,
): boolean {
  if (!accessType?.length) {
    return false;
  }

  return accessType.some((type) => FLEET_STATION_ACCESS_TYPES.indexOf(type) !== -1);
}
