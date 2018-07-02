import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { Topnav } from './Topnav';

configure({ adapter: new Adapter() });

const setup = () => {
    const wrapper = shallow(<Topnav title="Test Title" />);
  ​
    return {
        wrapper
    };
};

// based on: https://stackoverflow.com/a/49971873
describe("Topnav Component", () => {
    it("should render without throwing an error", () => {
        const { wrapper } = setup();
        expect(wrapper).toBeTruthy();
    });

    it("should display the title", () => {
        const { wrapper } = setup();
        expect(wrapper.contains('Test Title')).toBeTruthy();
    });
});