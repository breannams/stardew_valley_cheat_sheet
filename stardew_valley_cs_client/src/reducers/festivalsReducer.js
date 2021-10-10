export const festivalsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FESTIVALS':
            return [...state, action.payload]
        default:
        return state
    }

}
export default festivalsReducer