import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_DONE,
    FETCH_VEHICLES_ERROR,
    RESET_VEHICLES,
} from '@Store/constants/vehicles'
import { createAction } from 'deox'

export const vehiclesActions = {
    fetchVehicles: createAction(FETCH_VEHICLES),
    fetchVehiclesError: createAction(FETCH_VEHICLES_ERROR),
    fetchVehiclesDone: createAction(
        FETCH_VEHICLES_DONE,
        (resolve) => (response: { response: any }) => resolve(response)
    ),
    resetVehicles: createAction(RESET_VEHICLES),
}
