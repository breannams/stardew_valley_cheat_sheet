import {Component} from 'react'
import { Link } from 'react-router-dom';
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

        this.props.loginAction(this.state)
    }


    render(){
        return(
            <div>
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