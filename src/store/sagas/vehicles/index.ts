import { takeLatest } from 'redux-saga/effects'
import { getType } from 'deox'
import { vehiclesActions } from '@Store/actions/vehicles'
import { getVehiclesSaga } from './getVehiclesSaga'

export const vehiclesSagas = [
    takeLatest(getType(vehiclesActions.fetchVehicles), getVehiclesSaga),
]
