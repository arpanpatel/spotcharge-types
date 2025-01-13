
export const InOutType = {
    vehicle: 'vehicle',
    asset: 'asset'
} as const;

export type InOutKeys =  keyof typeof InOutType;
