export const gamesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_GAMES':
            return [...state, action.payload]
        default:
        return state
    }

}
export default gamesReducer