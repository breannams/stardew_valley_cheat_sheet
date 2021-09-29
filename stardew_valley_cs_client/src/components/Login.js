import react, {Component} from 'react'

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.inputNode1.value)
        // console.log(this.inputNode2.value)
        const formData = new FormData()
        formData.append("username",this.inputNode1.value)
        formData.append("password", this.inputNode2.value)
        fetch("http://localhost:3000/tokens", {method: 'POST', body: formData})
        .then(resp => resp.json())
        .then(resp => console.log(resp.jwt))
    }


render(){
    return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <label>Username: </label>
                <input type = 'username' id= "username" name= "username" ref = {node => {this.inputNode1 = node}}/>
                <label>Password: </label>
                <input type = "password" id= 'password' name = 'password' ref = {node => {this.inputNode2 = node}}/>
                <input type = 'submit' value = 'Sign In' />
            </form>
        </div>

    )
}




}

export default Login;