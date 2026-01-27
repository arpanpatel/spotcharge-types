import { PointType } from "../../enum";
import { ConnectorTypeModel } from "../connector-type.model";
import { CreatedByModel } from "../created-by.model";
import { PhoneNumberModel } from "../phone-number-model";
import { PublicUserVehicle } from "../public-user-vehicle.model";
import { ServiceChargeModel } from "../service-charge.model";
import { Timestamp } from "../timestamp";
export interface SlotHoldApiModel {
    id: string;
    userId: string;
    userInfo: {
        id: string;
        name: string;
        phoneNumber: PhoneNumberModel;
    };
    chargingDate: Timestamp;
    startDateTime: Timestamp;
    endDateTime: Timestamp;
    charger: {
        id: string;
        name: string;
        address: string;
        pointType: PointType;
    };
    connectorNo: number;
    connectorType?: ConnectorTypeModel;
    unit: number;
    unitRate: number;
    vehicle: PublicUserVehicle;
    amount: number;
    tax: number;
    totalAmount: number;
    serviceChargeInfo: ServiceChargeModel;
    serviceCharge: number;
    isServiceChargeApplicable: boolean;
    expiresAt: Timestamp;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deleteBy: CreatedByModel;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    timeZone: string;
}
//# sourceMappingURL=slot-hold.api.model.d.ts.map