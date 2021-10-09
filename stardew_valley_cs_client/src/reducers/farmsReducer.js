

export const farmsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FARM':
            
            return [...state, action.payload]

        case "FETCH_USER_FARM":
     let farm = action.payload
     let user = JSON.parse(localStorage.getItem("user"))
     if (user){
        let user_id = user.id 
     
     return[
     ...state, 
                farm.filter (farm => farm.user_id === user_id)
     ]
    
    }

        default:
        return state
    }
}
export default farmsReducer