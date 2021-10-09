export const animalsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ANIMALS':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default animalsReducer