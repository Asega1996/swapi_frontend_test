import { getAllVehiclesService } from '@Services/api/vehicles'
import { vehiclesActions } from '@Store/actions/vehicles'
import { call, put } from 'redux-saga/effects'

export function* getVehiclesSaga() {
    try {
        // Make api all
        const response: unknown = yield call(getAllVehiclesService)
        // Update redux state
        yield put(vehiclesActions.fetchVehiclesDone({ response: response }))
    } catch (err) {
        yield put(vehiclesActions.fetchVehiclesError())
    }
}
