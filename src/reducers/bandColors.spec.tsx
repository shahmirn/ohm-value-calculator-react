// based on: https://redux.js.org/recipes/writing-tests#example-2
import { IBandColor } from '../models/IBandColor';
import reducer from './bandColors';

describe('bandColors reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {} as IBandColor)).toEqual({})
    });

    it('should handle SET_BAND_COLOR', () => {
        expect(
            reducer(
                {},
                {
                    band: '1',
                    color: 'color1',
                    type: 'SET_BAND_COLOR'
                }
            )
        ).toEqual(
            {
                '1': {
                    band: '1',
                    color: 'color1'
                }
            }
        );

        expect(
            reducer(
                {
                    '2': {
                        band: '2',
                        color: 'color2'
                    }
                },
                {
                    band: '3',
                    color: 'color3',
                    type: 'SET_BAND_COLOR'
                }
            )
        ).toEqual(
            {
                '2': {
                    band: '2',
                    color: 'color2'
                },
                '3': {
                    band: '3',
                    color: 'color3'
                }
            }
        );
    });
});
