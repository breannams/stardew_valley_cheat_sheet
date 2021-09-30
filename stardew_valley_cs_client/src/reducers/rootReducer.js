import {combineReducers} from 'redux'
import  gamesReducer  from './gamesReducer'
import authenticationReducer from './authenticationReducer'
import registrationReducer from './registrationReducer'

export  const rootReducer = combineReducers({
    authentication: authenticationReducer,
    games: gamesReducer,
    registration: registrationReducer
})


export default rootReducer