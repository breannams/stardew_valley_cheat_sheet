import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
    signUp,

};

function login (username, password){

return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password})
          })
          .then(resp => resp.json())
          .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            
              return user
      
            })
    }
    
    function logout(){
        localStorage.removeItem('user')
    }

    function signUp(user) {
        return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    user:{
                          username: user.username,
                          password: user.password,
                          email: user.email,
                          admin: user.admin
                          }
                        })
                      })
                      .then(response => response.json())
                      .then(resp=>console.log(resp))
    }
    
    export default userService