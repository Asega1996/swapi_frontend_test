import { combineReducers } from 'redux'
import PlanetsReducer from './planets'

export const rootReducer = combineReducers({
    planets: PlanetsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
