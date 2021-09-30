import  {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


///need to setup react store again.
class UserHomepage extends Component {


    render(){
       
    return(
        <div>
        <div><h2>Welcome to your stardew valley cheat sheet {this.state.user.username}</h2>
            <button onClick= {this.handleLogout}>Logout</button></div> 
        </div>
    )
    }
}


export default UserHomepage