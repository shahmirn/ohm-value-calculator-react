import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { ICalculationState } from '../models/ICalculationState';
import { Calculator } from './Calculator';

configure({ adapter: new Adapter() });

// based on: https://stackoverflow.com/a/49971873
describe("Calculator Component", () => {
    it("should render without throwing an error", () => {

        const bandColors = {};
        const calculation: ICalculationState = {
            loading: false
        };
        const setBandColor = jest.fn();
        const calculate = jest.fn();

        const wrapper = shallow(<Calculator bandColors={bandColors} calculation={calculation} setBandColor={setBandColor} calculate={calculate} />);
        expect(wrapper).toBeTruthy();
    });
});