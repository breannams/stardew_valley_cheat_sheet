
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

export class App extends Component{
  state = {
    user: {},
    error: ''
  }

  componentDidMount () {
    this.validation()
  }

  // TO DO: put these in another file and import them CREATE CONTAINER FOR LOGIN/SIGNUP


validation =() =>{
  let token = localStorage.getItem('token')
  if (token){
  fetch('http://localhost:3000/profile', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
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


  handleLogout = () => {
    localStorage.removeItem ("token")
      this.setState({
        user: {}
      })
  }

/////////////

 render (){
  return (
    <div className="App">

      <header className = "App-header">

      {this.state.user.username ? 
      <div><h2>Welcome to your stardew valley cheat sheet {this.state.user.username}</h2>
      <button onClick= {this.handleLogout}>Logout</button></div> :  
       <div className = 'sign-up-log-in'><h2>Sign Up: <SignUpForm signUp= {this.signUp} />  or Login: <LoginForm logIn = {this.logIn}/></h2></div> }
     
     </header>
 

    </div>
  );
}
}

export default App;
