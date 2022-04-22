import {
    FETCH_PLANETS,
    FETCH_PLANETS_DONE,
    FETCH_PLANETS_ERROR,
    RESET_PLANETS,
} from '@Store/constants/planets'
import { createAction } from 'deox'

export const planetActions = {
    fetchPlanets: createAction(FETCH_PLANETS),
    fetchPlanetsError: createAction(FETCH_PLANETS_ERROR),
    fetchPlanetsDone: createAction(
        FETCH_PLANETS_DONE,
        (resolve) => (response: { response: any }) => resolve(response)
    ),
    resetPlanets: createAction(RESET_PLANETS),
}
