import React, {Component} from 'react'


export default class LogIn extends Component {

    return(
        logIn = (user) => {
          fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user: {
                username: user.username,
                password: user.password
              }
            })
          })
          .then(resp => resp.json())
          .then(resp => {
            if (resp.token){
              localStorage.setItem('token', resp.token)
              this.setState({
                  user: resp.user
                  })
              }
              else {
                  this.setState({
                      error: resp.error
                  })
            }
          })
        }
        )

}