import { Component } from "react";

export default class SignUpForm extends Component{

    state = {
        email: '',
        username: '',
        password: '',
        admin: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
     this.props.signUp(this.state) 
    
    }
    
    render(){
        return(
        <div>
          
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