import { combineReducers } from 'redux'
import PlanetsReducer from './planets'
import StarshipsReducer from './starships'
import VehiclesReducer from './vehicles'

export const rootReducer = combineReducers({
    planets: PlanetsReducer,
    starships: StarshipsReducer,
    vehicles: VehiclesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
