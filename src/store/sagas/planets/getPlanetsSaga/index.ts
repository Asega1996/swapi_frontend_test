import { getAllPlanetsService } from '@Services/api/planets'
import { planetActions } from '@Store/actions/planets'
import { call, put } from 'redux-saga/effects'

export function* getPlanetsSaga() {
    try {
        // Make api all
        const response: unknown = yield call(getAllPlanetsService)
        // Update state
        yield put(planetActions.fetchPlanetsDone({ response: response }))
    } catch (err) {
        yield put(planetActions.fetchPlanetsError())
    }
}
