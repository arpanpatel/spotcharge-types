
export const InOutType = {
    VEHICLE: 'vehicle',
    ASSET: 'asset'
} as const;

export type InOutKeys =  keyof typeof InOutType;
