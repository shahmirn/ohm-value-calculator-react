// based on: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/api/shop.js

import config from "../config";
import { ICalculation } from "../models/ICalculation";

export default {
    calculate: (bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string, cb: (calculation: ICalculation) => any) =>
        fetch(`${config.apiGateway.URL}/api/calculator/bandAColor/${bandAColor}/bandBColor/${bandBColor}/bandCColor/${bandCColor}/bandDColor/${bandDColor}`)
            .then(res => res.json())
            .then(result => {
                cb({
                    maximum: result.maximum,
                    minimum: result.minimum,
                    resistance: result.resistance
                });
            }, err => {
                cb({
                    maximum: undefined,
                    minimum: undefined,
                    resistance: undefined
                });
            })
}
