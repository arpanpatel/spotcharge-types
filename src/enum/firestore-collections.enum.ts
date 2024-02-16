// eslint-disable-next-line no-shadow
import {WalletTransactionApiModel} from "../models";

export enum Collection {
    Franchises = 'franchises',
    PublicUsers = 'publicUsers',
    TempAssignClaim = 'tempAssignClaim',
    Fleets = 'fleets',
    FleetUsers = 'fleetUsers',
    Chargers = 'chargers',
    FleetChargers = 'fleetChargers',
    ChargerCapacities = 'chargerCapacities',
    Vendors = 'vendors',
    ConnectorTypes = 'connectorTypes',
    Orders = 'orders',
    Rfids = 'rfids',
    FleetInvoices = 'fleetInvoices',
    DeleteAccounts = 'deleteAccounts',
    FleetOrders = 'fleetOrders',
    Bookings = 'bookings',
    WalletTransaction = 'walletTransaction',
}
