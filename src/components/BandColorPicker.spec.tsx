import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { BandColorPicker  } from './BandColorPicker';

configure({ adapter: new Adapter() });

// based on: https://stackoverflow.com/a/49971873
describe("Topnav Component", () => {
    it("should render without throwing an error", () => {
        const onChange = jest.fn();
        const colors: string[] = ['aquamarine'];
        const label = 'Label';
        const value = 'Value';

        const wrapper = mount(<BandColorPicker onChange={(onChange)} colors={colors} label={label} value={value} />);
        expect(wrapper).toBeTruthy();

        expect(wrapper.find("option[value='aquamarine']").length).toBe(1);
    });
});
