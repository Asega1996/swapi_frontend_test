import { planetActions } from '@Store/actions/planets'
import planetReducer from '.'

const defaultState = {
    availablePlanets: {},
    fetching: false,
    success: false,
    error: false,
}

describe('planet reducer', () => {
    it('should handle FETCH_PLANETS', () => {
        expect(
            planetReducer(defaultState, planetActions.fetchPlanets())
        ).toEqual({
            availablePlanets: {},
            fetching: true,
            success: false,
            error: false,
        })
    })

    it('should handle RESET_PLANETS', () => {
        expect(
            planetReducer(defaultState, planetActions.resetPlanets())
        ).toEqual(defaultState)
    })

    it('should handle FETCH_PLANETS_ERROR', () => {
        expect(
            planetReducer(defaultState, planetActions.fetchPlanetsError())
        ).toEqual({
            availablePlanets: {},
            fetching: false,
            success: false,
            error: true,
        })
    })

    it('should handle FETCH_PLANETS_DONE', () => {
        const responseRequest = { totalElements: 1, data: [{ name: 'test' }] }
        expect(
            planetReducer(
                defaultState,
                planetActions.fetchPlanetsDone({ response: responseRequest })
            )
        ).toEqual({
            availablePlanets: { totalElements: 1, data: [{ name: 'test' }] },
            fetching: false,
            success: true,
            error: false,
        })
    })
})
