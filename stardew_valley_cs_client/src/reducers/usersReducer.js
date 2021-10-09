

export const usersReducer = (state = [], action) => {
    switch(action.type){
                
        case 'SIGNIN_USER':

                const user = JSON.stringify(action.payload.user)
                const token = action.payload.jwt
                localStorage.setItem("token", token )
                localStorage.setItem("user", user)
       
                return[...state, action.payload]     
        
        case "CHECK_LOGIN_STATUS":
            return [...state, action.payload]
                 
        default:

        return state
    }




}
export default usersReducer

