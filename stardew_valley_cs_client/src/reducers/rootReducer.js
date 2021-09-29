import {combineReducers} from 'redux'
import { gamesReducer } from './gamesReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    games: gamesReducer
})