import { CapacityUnit } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { ColorModel } from "../color.model";
import { ServiceChargeModel } from "../service-charge.model";
export interface ChargerCapacityApiModel {
    id: string;
    value: number;
    unit: CapacityUnit;
    color: ColorModel;
    serviceCharge: ServiceChargeModel;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
}
//# sourceMappingURL=charger-capacity.api.model.d.ts.map