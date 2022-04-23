import { starshipActions } from '@Store/actions/starships'
import starshipsReducer from '.'

const defaultState = {
    availableStarships: {},
    fetching: false,
    success: false,
    error: false,
}

describe('starships reducer', () => {
    it('should handle FETCH_STARSHIPS', () => {
        expect(
            starshipsReducer(defaultState, starshipActions.fetchStarships())
        ).toEqual({
            availableStarships: {},
            fetching: true,
            success: false,
            error: false,
        })
    })

    it('should handle RESET_STARSHIPS', () => {
        expect(
            starshipsReducer(defaultState, starshipActions.resetStarships())
        ).toEqual(defaultState)
    })

    it('should handle FETCH_STARSHIPS_ERROR', () => {
        expect(
            starshipsReducer(
                defaultState,
                starshipActions.fetchStarshipsError()
            )
        ).toEqual({
            availableStarships: {},
            fetching: false,
            success: false,
            error: true,
        })
    })

    it('should handle FETCH_STARSHIPS_DONE', () => {
        const responseRequest = { totalElements: 1, data: [{ name: 'test' }] }
        expect(
            starshipsReducer(
                defaultState,
                starshipActions.fetchStarshipsDone({
                    response: responseRequest,
                })
            )
        ).toEqual({
            availableStarships: { totalElements: 1, data: [{ name: 'test' }] },
            fetching: false,
            success: true,
            error: false,
        })
    })
})
