export const cropsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CROPS':
            return action.payload
        default:
        return state
    }

}
export default cropsReducer