import { ICalculation } from "../models/ICalculation";
import { ICalculationState } from "../models/ICalculationState";

interface ICalculationAction extends ICalculation {
    type?: string;
}

const initialState: ICalculationState = {
    loading: false
};

const calculation = (state: ICalculationState = initialState, action: ICalculationAction) => {
    switch (action.type) {
        case 'SET_CALCULATION_START':
            return {
                ...state,
                loading: true
            }
        case 'SET_CALCULATION_DONE':
            return  {
                ...state,
                loading: false,
                maximum: action.maximum,
                minimum: action.minimum,
                resistance: action.resistance,
                tolerance: action.tolerance
            };
        default:
            return state
    }
}

export default calculation;
