export enum ChargerPhysicalState {

    Installed = "installed",
    // Physically mounted and wired at a station

    InStock = "in_stock",
    // Approved and stored in warehouse. ready for deployment

    InTransit = "in_transit",
    // Being transported between locations (e.g. warehouse ↔ station)

    UnderRepair = "under_repair",
    // At repair facility or under technical work

    Decommissioned = "decommissioned"
    // Permanently removed from operation. not expected to return to service
}