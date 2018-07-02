// based on: https://redux.js.org/recipes/writing-tests#example-2
import reducer from './calculation';

describe('calculation reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    });

    it('should handle SET_CALCULATION', () => {
        expect(
            reducer(
                {},
                {
                    maximum: -1,
                    minimum: -2,
                    resistance: -3,
                    tolerance: -4,
                    type: 'SET_CALCULATION'
                }
            )
        ).toEqual(
            {
                maximum: -1,
                minimum: -2,
                resistance: -3,
                tolerance: -4
            }
        );
    });
});
