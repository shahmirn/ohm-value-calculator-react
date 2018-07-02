// based on: https://github.com/reduxjs/redux/blob/master/examples/todos/src/actions/index.js

import calculator from '../api/calculator';
import { IBandColor } from '../models/IBandColor';
import { ICalculation } from '../models/ICalculation';

export const setBandColor = (band: string, color: string) => ({
    band,
    color,
    type: 'SET_BAND_COLOR',
});

const setCalculationStart = () => ({
    type: 'SET_CALCULATION_START'
});

const setCalculationDone = (calculation: ICalculation) => ({
    ...calculation,
    type: 'SET_CALCULATION_DONE'
});

export const calculate = (bandColors: {[key: string]: IBandColor}) => (dispatch: any) => {
    const bandAColor = bandColors.A && bandColors.A.color;
    const bandBColor = bandColors.B && bandColors.B.color;
    const bandCColor = bandColors.C && bandColors.C.color;
    const bandDColor = bandColors.D && bandColors.D.color;

    if (bandAColor && bandBColor && bandCColor && bandDColor) {
        dispatch(setCalculationStart());

        return calculator.calculate(bandAColor, bandBColor, bandCColor, bandDColor, calculation => {
            dispatch(setCalculationDone(calculation))
        })
    } else {
        return dispatch(setCalculationDone({}));
    }
};
