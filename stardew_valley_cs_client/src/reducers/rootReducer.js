import {combineReducers} from 'redux'
import farmsReducer from './farmsReducer'
import  gamesReducer  from './gamesReducer'
import animalsReducer from './animalsReducer'
import buildingsReducer from './buildingsReducer'
import cropsReducer from './buildingsReducer'
import fesivalsReducer from './festivalsReducer'
import questsReducer from './questsReducer'
import villagersReducer from './villagersReducer'
import usersReducer from './usersReducer'

export  const rootReducer = combineReducers({

    games: gamesReducer,
    animals: animalsReducer,
    buildings: buildingsReducer,
    crops: cropsReducer,
    farms: farmsReducer,
    festivals: fesivalsReducer,
    quests: questsReducer,
    villagers: villagersReducer,
    users: usersReducer
})


export default rootReducer