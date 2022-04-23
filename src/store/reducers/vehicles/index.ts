import { vehiclesActions } from '@Store/actions/vehicles'
import { createReducer } from 'deox'
import { always, evolve } from 'ramda'

// Default State type definition
type DefaultState = {
    availableVehicles: any
    fetching: boolean
    error: boolean
    success: boolean
}

// Default state object
const defaultState: DefaultState = {
    availableVehicles: {},
    fetching: false,
    success: false,
    error: false,
}

// Reducer definition
export default createReducer(defaultState, (handleAction) => [
    handleAction(vehiclesActions.fetchVehicles, (state) =>
        evolve(
            {
                success: always(false),
                error: always(false),
                fetching: always(true),
            },
            state
        )
    ),

    handleAction(vehiclesActions.fetchVehiclesDone, (state, { payload }) =>
        evolve(
            {
                availableVehicles: always(payload.response),
                success: always(false),
                error: always(false),
                fetching: always(false),
            },
            state
        )
    ),

    handleAction(vehiclesActions.fetchVehiclesError, (state) =>
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

    handleAction(vehiclesActions.resetVehicles, (state) =>
        evolve(
            {
                success: always(defaultState.success),
                error: always(defaultState.error),
                fetching: always(defaultState.fetching),
                availableVehicles: always(defaultState.availableVehicles),
            },
            state
        )
    ),
])
