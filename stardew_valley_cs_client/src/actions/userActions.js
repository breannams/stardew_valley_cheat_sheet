
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

    dispatch({type: "SIGNIN_USER", payload: user})})



}
}



export const loginAction = (user) => {
return(dispatch) => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({user})
  })
  .then(resp => resp.json())
  .then(user => {

   dispatch({type: "SIGNIN_USER", payload:user})
  })
}}


export const checkLoginStatus =() => {
  return (dispatch) => {
  let token = localStorage.getItem('token')
      
  if (token){
  fetch('http://localhost:3000/auto_login', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then (resp => resp.json())
  .then (user => {
  dispatch({type: "CHECK_LOGIN_STATUS", payload:user})
   
  })

}}}