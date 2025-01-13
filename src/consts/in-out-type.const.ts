
export const InOutTypeConst = {
    VEHICLE: 'vehicle',
    ASSET: 'asset'
} as const;

export type InOutType =  keyof typeof InOutTypeConst;
