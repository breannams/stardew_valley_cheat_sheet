import { Component } from "react";
import {signUpAction} from '../../actions/userActions'
import {connect} from 'react-redux'
import history from '../../helpers/history'

export class SignUpForm extends Component{

    state = {
        email: '',
        username: '',
        password: '',
        // admin: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
  
        if (this.state.email && this.state.username && this.state.password){
            this.props.signUpAction(this.state)
            history.push('/games') 
            }
        else {
                history.push('/signup')
        }

    }
    
    
    render(){
        return(
        <div>
           Sign Up:
        <form onSubmit = {this.handleSubmit}>
           
            <label>Email: </label>
            <input type = 'text' name= 'email' value = {this.state.email} onChange = {this.handleChange}/>

            <label>Username: </label>
            <input type = 'text' name='username' value= {this.state.username} onChange = {this.handleChange}/>

            <label>Password: </label>
            <input type = 'text' name = "password" value = {this.state.password} onChange = {this.handleChange}/>
            
            <input type = "submit" value = "Sign Up"/>
        </form>
        </div>
        )
    }

}


export default connect(null, {signUpAction} )(SignUpForm)