import { IBandColor } from "../models/IBandColor";

const initialState: {[key: string]: IBandColor} = {};

const bandColors = (state: {[key: string]: IBandColor} = initialState, action: IBandColor) => {
    switch (action.type) {
        case 'SET_BAND_COLOR':
            return  {
                ...state,
                [action.band]: {
                    band: action.band,
                    color: action.color
                }
            };
        default:
            return state
    }
}

export default bandColors;
