import { Component } from "react"
import { LoginButton } from "./HomePageNavs"
import { SignupButton } from "./HomePageNavs"
export default class HomePage extends Component {

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