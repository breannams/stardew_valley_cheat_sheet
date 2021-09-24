import {combineReducers} from 'redux'
import { usersReducer } from './usersReducer'
import { gamesReducer } from './gamesReducer'


export const rootReducer = combineReducers({
    users: usersReducer,
    games: gamesReducer
})

