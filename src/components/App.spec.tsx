import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

import App from './App';
import { Calculator } from './Calculator';
import { Topnav } from './Topnav';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({
    bandColors: {},
    calculation: {}
});

// based on: https://redux.js.org/recipes/writing-tests
const setup = () => {
    const wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    );
  ​
    return {
        wrapper
    };
};

// based on: https://stackoverflow.com/a/49971873
describe("App Component", () => {
    it("should render without throwing an error", () => {
        const { wrapper } = setup();
        expect(wrapper).toBeTruthy();
    });

    it("should render the Topnav", () => {
        const { wrapper } = setup();
        expect(wrapper.find(Topnav)).toBeTruthy();
    });

    it("should render the Calculator", () => {
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(wrapper.find(Calculator)).toBeTruthy();
    });
});