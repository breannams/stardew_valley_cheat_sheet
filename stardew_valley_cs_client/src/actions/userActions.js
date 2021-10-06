
let user = localStorage.getItem('user')

// export const validation =() =>{
//     return(dispatch) => {
//     let token = localStorage.getItem('token')
//     if (token){
//     fetch('http://localhost:3000/profile', {
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })
//     .then (resp => resp.json())
//     .then (user => { 
//     //   if(user.id){
//     //     this.setState({
//     //       user: user
//     //     })
//     //  }
//     dispatch({type: "VALIDATE_USER", payload: user})
//     })
//   }
//   }
// }



export const signUpAction = user => {
  return (dispatch) => {
    
  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({user})
  })
  .then(response => response.json())
 
  .then(user => {

    dispatch({type: "SIGNUP_USER", payload: user})})



}
}
export default signUpAction