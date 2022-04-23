import {
    FETCH_STARSHIPS,
    FETCH_STARSHIPS_DONE,
    FETCH_STARSHIPS_ERROR,
    RESET_STARSHIPS,
} from '@Store/constants/starships'
import { createAction } from 'deox'

export const starshipActions = {
    fetchStarships: createAction(FETCH_STARSHIPS),
    fetchStarshipsError: createAction(FETCH_STARSHIPS_ERROR),
    fetchStarshipsDone: createAction(
        FETCH_STARSHIPS_DONE,
        (resolve) => (response: { response: any }) => resolve(response)
    ),
    resetStarships: createAction(RESET_STARSHIPS),
}
