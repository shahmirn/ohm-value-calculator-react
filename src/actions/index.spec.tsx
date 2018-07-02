import * as fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import config from "../config";
import { IBandColor } from '../models/IBandColor';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('setBandColor should create SET_BAND_COLOR action', () => {
        expect(actions.setBandColor('Test Band', 'Test Color')).toEqual({
            band: 'Test Band',
            color: 'Test Color',
            type: 'SET_BAND_COLOR'
        })
    });
});

describe('async actions', () => {
    it('calculate should create SET_CALCULATION calculating resistance is done', () => {

        const bandColors: {[key: string]: IBandColor} = {
            'A': {
                band: 'A',
                color: 'color1'
            },
            'B': {
                band: 'B',
                color: 'color2'
            },
            'C': {
                band: 'C',
                color: 'color3'
            },
            'D': {
                band: 'D',
                color: 'color4'
            }
        };

        const bandAColor = bandColors.A.color;
        const bandBColor = bandColors.B.color;
        const bandCColor = bandColors.C.color;
        const bandDColor = bandColors.D.color;

        const resistance = 'Resistance';
        const tolerance = 'Tolerance';
        const minimum = 'Minimum';
        const maximum = 'Maximum';

        fetchMock
            .getOnce(`${config.apiGateway.URL}/api/calculator/bandAColor/${bandAColor}/bandBColor/${bandBColor}/bandCColor/${bandCColor}/bandDColor/${bandDColor}`, {
                body: {"resistance":resistance,"tolerance":tolerance,"minimum":minimum,"maximum":maximum},
                headers: { 'content-type': 'application/json' } }
            )

        const store = mockStore({ bandColors: {} });

        const expectedActions = [
            {
                maximum,
                minimum,
                resistance,
                tolerance,
                type: 'SET_CALCULATION'
            }
        ]

        return store.dispatch(actions.calculate(bandColors) as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
