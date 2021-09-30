import react, {Component} from 'react'

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
        this.props.logIn(this.state)
    }


render(){
    return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <label>Username: </label>
                <input type = 'text' id= "username" name= "username" value = {this.state.username} onChange = {this.handleChange}/>
                <label>Password: </label>
                <input type = "password" id= 'password' name = 'password' value = {this.state.password} onChange = {this.handleChange}/>
                {this.props.error? <p style ={{color: 'red'}}>{this.props.error}</p> : null}
                <input type = 'submit' value = 'Sign In' />
            </form>
        </div>

    )
}

}

export default LoginForm;