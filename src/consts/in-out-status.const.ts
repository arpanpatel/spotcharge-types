export const InOutStatusConst = {
    IN: 'IN',
    OUT: 'OUT'
} as const;

export type InOutStatusType =  keyof typeof InOutStatusConst;