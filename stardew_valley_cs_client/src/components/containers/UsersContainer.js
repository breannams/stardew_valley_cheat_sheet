import React, {Component} from 'react'
import LoginForm from '../forms/LoginForm'
import SignUpForm from '../forms/SignUpForm'
// import Logout from './Logout'


class UsersContainer extends Component {

    state = {
        user: {},
        error: ''
      }


    render(){
        return(
            <div>
                <header className = "usercontainer-header">
                    
                    {this.state.user.username ? 
                    <div><h2>Welcome to your stardew valley cheat sheet {this.state.user.username}</h2> </div> : 
                    <div className = 'sign-up-log-in'><h2>Sign Up: <SignUpForm signUp= {this.signUp} />  or Login: <LoginForm logIn = {this.logIn}/></h2></div> }

                </header>
            </div>
        )
    }
}

export default UsersContainer