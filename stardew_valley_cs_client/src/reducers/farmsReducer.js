export const farmsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FARM':
            return [...state, action.payload]
        default:
        return state
    }

}
export default farmsReducer