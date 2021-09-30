
//                     {this.state.user.username ? 
//                     <div><h2>Welcome to your stardew valley cheat sheet {this.state.user.username}</h2> </div> : 
//                     <div className = 'sign-up-log-in'><h2>Sign Up: <SignUpForm signUp= {this.signUp} />  or Login: <LoginForm logIn = {this.logIn}/></h2></div> }

import  {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions/userActions';


class Homepage extends Component {
    
    state ={
        user: {}
    }

    render(){
        const {user} = this.props
        debugger
    return(
        <div>
           <h1> Hello, {user.username}</h1>
           <Link to= "/login"> Logout</Link>
        </div>
    )
    }
}

export default Homepage