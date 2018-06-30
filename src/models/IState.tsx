import { IBandColor } from './IBandColor';
import { ICalculation } from './ICalculation';

export interface IState {
    bandColors: {[key: string]: IBandColor},
    calculation: ICalculation
}
