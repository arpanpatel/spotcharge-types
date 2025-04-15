
export const Notifications = {
    scheduleBooking: "scheduleBooking",
    rescheduleBooking: "rescheduleBooking",
    completeCharging: "completeCharging",
    cancelCharging: "cancelCharging",
    startCharging: "startCharging",
    refundCharging: "refundCharging",
    stopCharging: "stopCharging",
    chargingReminder: "chargingReminder",
    updateApp: "updateApp",
    others: "others",
    marketing: "marketing",
} as const;

export type NotificationType = keyof typeof Notifications;
