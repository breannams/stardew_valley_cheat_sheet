
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
// import Welcome from './components/welcome'
// import Logout from './components/logout'
export class App extends Component{
  state = {
    user: {}
  }

  // TO DO: put these in another file and import them 
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
    })
  }


/////////////

 render (){
  return (
    <div className="App">
     <header className = "App-header">
      <h2>
        
      {this.state.user.username ? <h1>Welcome to your stardew valley cheat sheet {this.state.user.username}</h1> :  <>  <div className = 'sign-up-log-in'>Sign Up: <SignUp signUp= {this.signUp} />  or Login: <Login logIn = {this.logIn}/></div></> }
     </h2>
     </header>

    </div>
  );
}
}



export default App;
