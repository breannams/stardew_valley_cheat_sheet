export const questsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUESTS':
            return [ ...state, action.payload ]
        default:
        return state
    }

}
export default questsReducer