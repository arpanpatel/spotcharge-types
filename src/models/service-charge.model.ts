import {RateDuration} from "./rate-duration.model";

export interface ServiceChargeModel {
    id: string;
    name: string;
    rate: number;
    rateDuration: RateDuration;
}