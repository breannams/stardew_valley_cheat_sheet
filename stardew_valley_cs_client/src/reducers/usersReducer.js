
const initialState = {
    all: [],
}
export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        // case 'VALIDATE_USER':

        //     return{
        //         ...state,
        //         user:action.payload
        //     }
                
        case 'SIGNUP_USER':
            
            const oldUser = state.all.find(user => user.id === action.payload.user.id)
            if (oldUser){

                return { ... state, user: action.payload.user, token: action.payload.token}
            }
            else{ 
           
                const user = JSON.stringify(action.payload.user)
                const token = action.payload.jwt
  
                localStorage.setItem("token", token )
                localStorage.setItem("user", user)
                return{...state, all: state.all.concat(action.payload)}
            }
            
                 
        default:
        return state
    }

}
export default usersReducer




// signUp = user => {
//     fetch('http://localhost:3000/users', {
//       method: "POST",
//       headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         user:{
//           username: user.username,
//           password: user.password,
//           email: user.email,
//           admin: user.admin
//         }
//       })
//     })
//     .then(response => response.json())
//     .then(user => this.setState({ user: user }) )
//   }