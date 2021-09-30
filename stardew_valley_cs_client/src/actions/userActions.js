import { userConstants } from '../constants/userConstants';
import { userService } from '../services/user_service';
import { history } from '../helpers/history';



export const userActions = {
  logInUser,
  logout,
  signUp,
};


function logInUser(username, password){
  return dispatch =>{
    dispatch(request({ username }))

    userService.logInUser(username,password)
    .then(user =>{
      dispatch(success(user))
      history.push('/')
    }
    )

  }
  function request(user){return{type: userConstants.LOGIN_REQUEST, user}}
  function success(user) {return {type: userConstants.LOGIN_SUCESS, user}}
}


function logout(){
  userService.logout()
  return{type: userConstants.LOGOUT}
}


function signUp(user){
  return dispatch => {
    dispatch(request(user))
    userService.register(user)
    .then(user => {
      dispatch(success())
      history.push('/login')

    })
  }
  function request(user){return{type: userConstants.REGISTER_REQUEST, user}}
  function success(user){return{type: userConstants.REGISTER_SUCCESS, user}}
}











// // export const logInUser = (user) =>{
// // return(dispatch) => {
// //       fetch("http://localhost:3000/login", {
// //         method: "POST",
// //         headers: {
// //           "Accept": "application/json",
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({
// //           user: {
// //             username: user.username,
// //             password: user.password
// //           }
// //         })
// //       })
// //       .then(resp => resp.json())
// //       .then(resp => {
// //         if (resp.token){
// //           localStorage.setItem('token', resp.token)
// //           this.setState({
// //               user: resp.user
// //               })
// //           }
// //           else {
// //               this.setState({
// //                   error: resp.error
// //               })
// //         }
// //       })
// // }
// // }

// export const validateUsers = () =>{
//   return(dispatch) =>{
//     let token = localStorage.getItem('token')
//     if (token){
//     fetch('http://localhost:3000/profile', {
//         headers: {
//         "Authorization": `Bearer ${token}`
//         }
//     })
//     .then (resp => resp.json())
//     // .then (user => {
//     //     if(user.id){
//     //     this.setState({
//     //         user: user
//     //     })
//     //     }
//     // })
//     // }
//    .then(user => dispatch({type: 'VALIDATE_USERS', payload: user}))
//   }
// }
// }


// // export const signUp = (user) => {
// //     fetch('http://localhost:3000/users', {
// //             method: "POST",
// //             headers: {
// //                 "Accept": "application/json",
// //                 "Content-Type": "application/json"
// //             },
// //             body: JSON.stringify({
// //               user:{
// //                 username: user.username,
// //                 password: user.password,
// //                 email: user.email,
// //                 admin: user.admin
// //               }
// //             })
// //           })
// //           .then(response => response.json())
// //           .then(user => this.setState({ user: user }) )
// // }

// // export const handleLogout = () =>{
// //     localStorage.removeItem("token")
// // }