

export const usersReducer = (state = [], action) => {
    switch(action.type){
                
        case 'SIGNIN_USER':

                const user = JSON.stringify(action.payload.user)
                const token = action.payload.jwt
  
                localStorage.setItem("token", token )
                localStorage.setItem("user", user)

                return[...state, action.payload]

        case "LOGOUT_USER":
     
         
                 
        default:

        return state
    }




}
export default usersReducer

