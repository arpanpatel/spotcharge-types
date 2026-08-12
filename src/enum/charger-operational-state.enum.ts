export enum ChargerOperationalState {

    Active = "active",
    // Fully operational, available for charging, billing enabled

    InActive = "inactive",
    // Installed but intentionally not usable (business decision)

    UnderMaintenance = "under_maintenance",
    // Scheduled preventive maintenance. temporarily unavailable

    OutOfService = "out_of_service",
    // Faulty or unsafe. should not allow charging sessions

}