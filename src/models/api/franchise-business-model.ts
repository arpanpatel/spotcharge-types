import {BusinessOwnership} from "../../enum/business-ownership.enum";
import {BusinessOperation} from "../../enum/business-operation.enum";
import {RevenueModel} from "../../enum/revenue-model.enum";
import {RevenueContractType} from "../../enum/revenue-contract-type.enum";

export interface BusinessModelConfig {
    ownership: BusinessOwnership;
    operation: BusinessOperation;
    revenueModel: RevenueModel;
}

export interface RevenueConfig {
    model: RevenueModel;
    platformShare?: number;
    payoutPerUnit?: number;
    contractType?: RevenueContractType;
    contractValue?: number;
}
