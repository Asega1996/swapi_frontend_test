import { takeLatest } from 'redux-saga/effects'
import { getType } from 'deox'
import { starshipActions } from '@Store/actions/starships'
import { getStarshipsSaga } from './getStarshipsSaga'

export const starshipsSagas = [
    takeLatest(getType(starshipActions.fetchStarships), getStarshipsSaga),
]
