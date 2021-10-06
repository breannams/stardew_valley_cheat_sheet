

export const usersReducer = (state = [], action) => {
    switch(action.type){
                
        case 'SIGNUP_USER':
  
                const user = JSON.stringify(action.payload.user)
                const token = action.payload.jwt
  
                localStorage.setItem("token", token )
                localStorage.setItem("user", user)
                debugger
                return[...state, action.payload]
   
            
                 
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