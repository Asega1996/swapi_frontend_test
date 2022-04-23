import { combineReducers } from 'redux'
import PlanetsReducer from './planets'
import StarshipsReducer from './starships'

export const rootReducer = combineReducers({
    planets: PlanetsReducer,
    starships: StarshipsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
