import {CapacityUnit} from "../enum";
import {ColorModel} from "./color.model";

export interface ChargerCapacityModel {
    id: string;
    value: number;
    unit: CapacityUnit;
    color: ColorModel;
}
