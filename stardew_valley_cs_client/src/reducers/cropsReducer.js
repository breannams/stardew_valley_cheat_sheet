export const cropsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CROPS':
            debugger
            return action.payload
        default:
        return state
    }

}
export default cropsReducer