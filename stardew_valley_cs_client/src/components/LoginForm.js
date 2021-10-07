import {Component} from 'react'

import { connect } from 'react-redux';
import {loginAction} from '../actions/userActions'



class LoginForm extends Component {
    state = {
        username:"",
        password:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.email && this.state.username && this.state.password){
        this.props.loginAction(this.state)
        this.props.history.push('/home')
        }
        else
        this.props.history.push('/login')
    }

   
    render(){
        return(
            <div>
    
                Login:
                <form onSubmit = {this.handleSubmit}>
                    <label>Username: </label>
                    <input type = 'text' id= "username" name= "username" value = {this.state.username} onChange = {this.handleChange}/>

                    <label>Password: </label>
                    <input type = "password" id= 'password' name = 'password' value = {this.state.password} onChange = {this.handleChange}/>

                    <input type = 'submit' value = 'Sign In' />
                </form>
            </div>
        )}
        }
export default connect (null, {loginAction})(LoginForm)