export enum ChargerOperationalState {

    Active = "active",
    // Fully operational, available for charging, billing enabled

    InActive = "inActive",
    // Installed but intentionally not usable (business decision)

    UnderMaintenance = "under_maintenance",
    // Scheduled preventive maintenance. temporarily unavailable

    OutOfService = "outOfService",
    // Faulty or unsafe. should not allow charging sessions

}