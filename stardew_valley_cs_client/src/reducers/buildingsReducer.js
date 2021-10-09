export const buildingsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BUILDINGS':
            return [ ...state , action.payload]
        default:
        return state
    }

}
export default buildingsReducer