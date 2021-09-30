import {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userActions} from '../actions/userActions'

class LoginForm extends Component {
constructor(props){
    super(props);

    // this.props.logout();

    this.state = {
        username:"",
        password:"",
        submitted: false
    }
}
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({submitted: true});
        const {username, password} = this.state
        if (username && password){
            this.props.login(username, password)
        }
    }


render(){
    const { loggingIn } = this.props;
    const {username, password, submitted} = this.state
    return(
        <div>
            <h1>Please Log In:</h1>
            <form onSubmit = {this.handleSubmit}>
                <label>Username: </label>
                <input type = 'text' id= "username" name= "username" value = {username} onChange = {this.handleChange}/>
                {submitted && !username}<div className = "alert-missing">Username is required</div>


                <label>Password: </label>
                <input type = "password" id= 'password' name = 'password' value = {password} onChange = {this.handleChange}/>
                {submitted && !password &&<div className = "alert-missing">Password is required</div>} 


                <input type = 'submit' value = 'Sign In' />


               <h5> Or Sign up: <Link to = '/signup' className = "btn-link">Signup</Link></h5>
            </form>
        </div>

        )
    }
}
   function mapState(state) {
        const { loggingIn } = state.authentication;
        return { loggingIn };
    }
    
    const mapDispatch = {
        login: userActions.login,
        logout: userActions.logout
    };



export default connect(mapState, mapDispatch) (LoginForm)