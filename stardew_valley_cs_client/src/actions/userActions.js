
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


