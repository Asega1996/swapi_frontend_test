import { starshipActions } from '@Store/actions/starships'
import { createReducer } from 'deox'
import { always, evolve } from 'ramda'

// Default State type definition
type DefaultState = {
    availableStarships: { totalElements: number; data: any[] } | {}
    fetching: boolean
    error: boolean
    success: boolean
}

// Default state object
const defaultState: DefaultState = {
    availableStarships: {},
    fetching: false,
    success: false,
    error: false,
}

// Reducer definition
export default createReducer(defaultState, (handleAction) => [
    handleAction(starshipActions.fetchStarships, (state) =>
        evolve(
            {
                success: always(false),
                error: always(false),
                fetching: always(true),
            },
            state
        )
    ),

    handleAction(starshipActions.fetchStarshipsDone, (state, { payload }) =>
        evolve(
            {
                availableStarships: always(payload.response),
                success: always(true),
                error: always(false),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(starshipActions.fetchStarshipsError, (state) =>
        evolve(
            {
                success: always(false),
                error: always(true),
                fetching: always(false),
                availableStarships: always({}),
            },
            state
        )
    ),

    handleAction(starshipActions.resetStarships, (state) =>
        evolve(
            {
                success: always(defaultState.success),
                error: always(defaultState.error),
                fetching: always(defaultState.fetching),
                availableStarships: always(defaultState.availableStarships),
            },
            state
        )
    ),
])
