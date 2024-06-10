import { ColorModel } from "./color.model";
import { ServiceChargeModel } from "./service-charge.model";
export interface ChargerCapacity {
    id: string;
    capacity: string;
    color: ColorModel;
    capacityValue?: number;
    capacityUnit?: string;
    serviceCharge?: ServiceChargeModel;
}
//# sourceMappingURL=charger-capacity.model.d.ts.map