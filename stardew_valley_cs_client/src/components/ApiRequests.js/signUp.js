import React, {Component} from 'react'


export default class SignUp extends Component {
return (
    signUp = user => {
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
)
}