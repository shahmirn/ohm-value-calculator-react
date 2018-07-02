import { ICalculation } from "./ICalculation";

export interface ICalculationState extends ICalculation {
    loading: boolean;
}
