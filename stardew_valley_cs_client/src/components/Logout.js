import React, {Component} from 'react'


export default class LogOut extends Component {
    


    render(){
    return(
        <div>
        <button onClick = {this.handleLogout}>Logout</button>
        </div>
    )
    }
}