import { all } from 'redux-saga/effects'
import { planetSagas } from './planets'

export default function* rootSaga() {
    yield all([...planetSagas])
}
