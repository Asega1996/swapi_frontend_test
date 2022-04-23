import { getAllStarshipsService } from '@Services/api/starships'
import { starshipActions } from '@Store/actions/starships'
import { call, put } from 'redux-saga/effects'

export function* getStarshipsSaga() {
    try {
        // Make api all
        const response: unknown = yield call(getAllStarshipsService)
        // Update state
        yield put(starshipActions.fetchStarshipsDone({ response: response }))
    } catch (err) {
        yield put(starshipActions.fetchStarshipsError())
    }
}
