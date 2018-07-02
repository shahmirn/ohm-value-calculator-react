import { IBandColor } from './IBandColor';
import { ICalculationState } from './ICalculationState';

export interface IState {
    bandColors: {[key: string]: IBandColor},
    calculation: ICalculationState
}
