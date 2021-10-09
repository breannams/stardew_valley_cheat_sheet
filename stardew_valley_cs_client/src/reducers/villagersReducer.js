export const villagersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_VILLAGERS':
            return [ ...state, action.payload]
        default:
        return state
    }

}

export default villagersReducer