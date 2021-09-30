import { authHeader } from '../helpers/authHeader';

export const userService = {
    logInUser,
    logout,
    signUp,
    validateUsers,
};

function logInUser (username, password){
fetch("http://localhost:3000/login", {
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

function validateUsers() {
    let token = localStorage.getItem('token')
        if (token){
        fetch('http://localhost:3000/profile', {
            headers: authHeader()
            
        })
        .then (resp => resp.json())
        .then (user => {
            if(user.id){
            this.setState({
                user: user
            })
            }
        })
        }
}
    function signUp(user) {
             fetch('http://localhost:3000/users', {
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
                      .then(user => this.setState({ user: user }) )
    }
    
    export default userService