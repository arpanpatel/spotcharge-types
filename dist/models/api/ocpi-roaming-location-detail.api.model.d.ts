/**
 * Mobile-facing roaming location detail from GET /api/ocpi/roaming/locations/:id.
 * Location fields mirror the Postgres partner-location mirror; tariffs are
 * connector-referenced only (not all party tariffs).
 */
export interface OcpiRoamingPartnerTariffApiModel {
    id: string;
    tariffId: string;
    currency: string;
    pricePerKwh: number | null;
}
/** Minimal OCPI connector shape needed for partner detail display. */
export interface OcpiRoamingConnectorApiModel {
    id: string;
    standard?: string;
    format?: string;
    power_type?: string;
    max_voltage?: number;
    max_amperage?: number;
    max_electric_power?: number;
    tariff_ids?: string[];
}
export interface OcpiRoamingEvseApiModel {
    uid: string;
    evse_id?: string;
    status?: string;
    connectors?: OcpiRoamingConnectorApiModel[];
}
export interface OcpiRoamingLocationRawApiModel {
    evses?: OcpiRoamingEvseApiModel[];
    operator?: {
        name?: string;
    };
}
export interface OcpiRoamingLocationApiModel {
    id: string;
    partyKey: string;
    ownerCountryCode: string;
    ownerPartyId: string;
    locationId: string;
    name?: string;
    address: string;
    city: string;
    state?: string;
    postalCode?: string;
    country: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    status: string;
    evseCount: number;
    connectorCount: number;
    connectorTypes: string[];
    publish: boolean;
    raw: OcpiRoamingLocationRawApiModel;
    lastUpdated: string;
}
export interface OcpiRoamingLocationDetailApiModel {
    location: OcpiRoamingLocationApiModel;
    tariffs: OcpiRoamingPartnerTariffApiModel[];
}
export interface OcpiRoamingLocationDetailResponseApiModel {
    success: boolean;
    data: OcpiRoamingLocationDetailApiModel;
}
//# sourceMappingURL=ocpi-roaming-location-detail.api.model.d.ts.map