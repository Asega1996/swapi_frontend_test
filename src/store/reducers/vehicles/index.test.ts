import { vehiclesActions } from '@Store/actions/vehicles'
import vehiclesReducer from '.'

const defaultState = {
    availableVehicles: {},
    fetching: false,
    success: false,
    error: false,
}

describe('vehicles reducer', () => {
    it('should handle FETCH_VEHICLES', () => {
        expect(
            vehiclesReducer(defaultState, vehiclesActions.fetchVehicles())
        ).toEqual({
            availableVehicles: {},
            fetching: true,
            success: false,
            error: false,
        })
    })

    it('should handle RESET_VEHICLES', () => {
        expect(
            vehiclesReducer(defaultState, vehiclesActions.resetVehicles())
        ).toEqual(defaultState)
    })

    it('should handle FETCH_VEHICLES_ERROR', () => {
        expect(
            vehiclesReducer(defaultState, vehiclesActions.fetchVehiclesError())
        ).toEqual({
            availableVehicles: {},
            fetching: false,
            success: false,
            error: true,
        })
    })

    it('should handle FETCH_VEHICLES_DONE', () => {
        const responseRequest = { totalElements: 1, data: [{ name: 'test' }] }
        expect(
            vehiclesReducer(
                defaultState,
                vehiclesActions.fetchVehiclesDone({ response: responseRequest })
            )
        ).toEqual({
            availableVehicles: { totalElements: 1, data: [{ name: 'test' }] },
            fetching: false,
            success: true,
            error: false,
        })
    })
})
