import {Component} from 'react'
import LoginForm from '../LoginForm'
import SignUpForm from '../SignUpForm'
import UserHomepage from '../UserHomepage'
class LoginSignupcontainer extends Component {
    state = {
        user: {},
        error: ''
      }
      
  componentDidMount () {
    this.validation()
  }
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

      render (){
        return (
          <div className="App">
      
            <header className = "App-header">
      
            {this.state.user.username 
            ? 
            <div><h1>Welcome to your stardew valley cheat sheet {this.state.user.username}</h1>
                <h2>Congratulations on your new start away from the corporate overlord Joja Corp! You have inherited your grandfather's old farm land in Stardew Valley. It is definitely a new change of pace from your office cubicle. But don't you worry! You'll meet many friendly and helpful villagers and learn the tricks of the trade along the way.</h2>
                <h2>Are you ready to start your new adventure??</h2>
                <button className = "StartGame" onClick = {this.handleStartGame}>Yes! I'm ready for my new life! </button>
            <button className = "StartGame" onClick= {this.handleLogout}>No! I want to stay at Joja corp in my boring cubicle forever!(Logout)</button></div>
            : 
             <div className = 'sign-up-log-in'><h2>Sign Up: <SignUpForm signUp= {this.signUp} />   Login: <LoginForm logIn = {this.logIn}/></h2></div> }
           
           </header>
       
      
          </div>
        );
      }
}
export default LoginSignupcontainer