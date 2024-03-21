import {ColorModel} from "./color.model";

export interface ChargerCapacity {
  id: string;
  capacity: string;
  color: ColorModel;
  capacityValue?: number;
  capacityUnit?: string;
}
