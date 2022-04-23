import { all } from 'redux-saga/effects'
import { planetSagas } from './planets'
import { starshipsSagas } from './starships'
import { vehiclesSagas } from './vehicles'

export default function* rootSaga() {
    yield all([...planetSagas, ...starshipsSagas, ...vehiclesSagas])
}
