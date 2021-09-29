import react, {Component} from 'react'

class Login extends Component {

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
        // console.log(this.inputNode1.value)
        // console.log(this.inputNode2.value)
    //     const formData = new FormData()
    
    // //     formData.append("username",this.inputNode1.value)
    // //     formData.append("password", this.inputNode2.value)
    //     fetch("http://localhost:3000/tokens", {method: 'POST', body: formData})
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp.jwt))
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

export default Login;