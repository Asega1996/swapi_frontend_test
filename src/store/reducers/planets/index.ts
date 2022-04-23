import { createReducer } from 'deox'
import { always, evolve } from 'ramda'
import { planetActions } from '@Store/actions/planets'

// Default State type definition
type DefaultState = {
    availablePlanets: { totalElements: number; data: any[] } | {}
    fetching: boolean
    error: boolean
    success: boolean
}

// Default state object
const defaultState: DefaultState = {
    availablePlanets: {},
    fetching: false,
    success: false,
    error: false,
}

// Reducer definition
export default createReducer(defaultState, (handleAction) => [
    handleAction(planetActions.fetchPlanets, (state) =>
        evolve(
            {
                success: always(false),
                error: always(false),
                fetching: always(true),
            },
            state
        )
    ),

    handleAction(planetActions.fetchPlanetsDone, (state, { payload }) =>
        evolve(
            {
                availablePlanets: always(payload.response),
                success: always(true),
                error: always(false),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(planetActions.fetchPlanetsError, (state) =>
        evolve(
            {
                success: always(false),
                error: always(true),
                fetching: always(false),
                availablePlanets: always({}),
            },
            state
        )
    ),

    handleAction(planetActions.resetPlanets, (state) =>
        evolve(
            {
                success: always(defaultState.success),
                error: always(defaultState.error),
                fetching: always(defaultState.fetching),
                availablePlanets: always(defaultState.availablePlanets),
            },
            state
        )
    ),
])
