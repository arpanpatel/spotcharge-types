
export const Notifications = {
    scheduleBooking: "scheduleBooking",
    rescheduleBooking: "rescheduleBooking",
    completeCharging: "completeCharging",
    cancelCharging: "cancelCharging",
    refundCharging: "refundCharging",
    stopCharging: "stopCharging",
    updateApp: "updateApp",
    others: "others",
    marketing: "marketing",
} as const;

export type NotificationType = keyof typeof Notifications;
