import  {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Homepage extends Component {


    render(){
        const {user} = this.props
    return(
        <div>
           <h1> Hello, {user.username}</h1>
           {/* <Link to= "/login"> Logout</Link> */}
        </div>
    )
    }
}


export default Homepage