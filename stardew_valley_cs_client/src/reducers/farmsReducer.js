export const farmsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FARMS':
            return action.payload
        default:
        return state
    }

}
export default farmsReducer