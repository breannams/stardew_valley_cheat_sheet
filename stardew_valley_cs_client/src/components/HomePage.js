import {Component} from 'react'
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm'


import {connect} from 'react-redux'


class HomePage extends Component {
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
    
      handleLogout = () => {
        localStorage.clear()
          this.setState({
            user: {}
          })
      }

      render (){
       const userData = this.state.user
        
        return (
          <div className="App">
      
            <header className = "App-header">
     
            {userData.username 
            ? 
           
            <div><h1>Welcome to your stardew valley cheat sheet {this.state.user.username}</h1>
                <h2>Congratulations on your new start away from the corporate overlord Joja Corp! You have inherited your grandfather's old farm land in Stardew Valley. It is definitely a new change of pace from your office cubicle. But don't you worry! You'll meet many friendly and helpful villagers and learn the tricks of the trade along the way.</h2>
                <h2>Are you ready to start your new adventure??</h2>
                <button className = "StartGame" onClick = {this.handleStartGame}>Yes! I'm ready for my new life! </button>
            <button className = "StartGame" onClick= {this.handleLogout}>No! I want to stay at Joja corp in my boring cubicle forever!(Logout)</button></div>
            : 
             <div className = 'sign-up-log-in'><h2>Sign Up: <SignUpForm /> Login: <LoginForm/></h2></div> }
      
           </header>
       
      
          </div>
        );
      }
}



export default HomePage
