import {TimeUnit} from "../enum";

export interface RateDuration {
    label: string;
    value: number;
    type: TimeUnit;
}