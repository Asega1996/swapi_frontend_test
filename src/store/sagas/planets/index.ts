import { takeLatest } from 'redux-saga/effects'
import { getType } from 'deox'
import { planetActions } from '@Store/actions/planets'
import { getPlanetsSaga } from './getPlanetsSaga'

export const planetSagas = [
    takeLatest(getType(planetActions.fetchPlanets), getPlanetsSaga),
]
