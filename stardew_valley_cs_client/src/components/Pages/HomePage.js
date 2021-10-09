import { Component } from "react"
import { LoginButton, SignupButton } from "../Navs/HomePageNavs"
import history from "../../helpers/history"

export default class HomePage extends Component {

    componentDidMount () {
        let user = localStorage.getItem("user")
       if (user){
        if (user.length > 0){
            history.push("/home")
        }}
    }
render (){
    
    return (
        <div>
            Welcome to Stardew Valley Cheat Sheet! <br></br>
            ______________________________________
        <br></br>
        <br></br>
        {LoginButton()}
        <br></br>
        <br></br>
        {SignupButton()}
        </div>
    )
}


}