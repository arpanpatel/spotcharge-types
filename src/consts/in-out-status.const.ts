export const InOutStatus = {
    IN: 'IN',
    OUT: 'OUT'
} as const;

export type InOutStatusType =  keyof typeof InOutStatus;