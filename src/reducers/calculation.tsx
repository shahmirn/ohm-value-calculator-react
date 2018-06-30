import { ICalculation } from "../models/ICalculation";

const initialState: ICalculation = {};

const calculation = (state: ICalculation = initialState, action: ICalculation) => {
    switch (action.type) {
        case 'SET_CALCULATION':
            return  {
                ...state,
                maximum: action.maximum,
                minimum: action.minimum,
                resistance: action.resistance
            };
        default:
            return state
    }
}

export default calculation;
