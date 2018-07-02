// based on: https://redux.js.org/recipes/writing-tests#example-2
import reducer from './calculation';

describe('calculation reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ loading: false })
    });

    it('should handle SET_CALCULATION_START', () => {
        expect(
            reducer(
                {
                    loading: false
                },
                {
                    type: 'SET_CALCULATION_START'
                }
            )
        ).toEqual(
            {
                loading: true
            }
        );
    });

    it('should handle SET_CALCULATION_DONE', () => {
        expect(
            reducer(
                {
                    loading: true
                },
                {
                    maximum: -1,
                    minimum: -2,
                    resistance: -3,
                    tolerance: -4,
                    type: 'SET_CALCULATION_DONE'
                }
            )
        ).toEqual(
            {
                loading: false,
                maximum: -1,
                minimum: -2,
                resistance: -3,
                tolerance: -4
            }
        );
    });
});
