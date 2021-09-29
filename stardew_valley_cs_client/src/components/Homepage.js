import react, {Component} from 'react'
import UsersContainer from './containers/UsersContainer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Homepage extends Component {
    render(){
    return(
        <div>
            <UsersContainer />
        </div>
    )
    }
}
export default Homepage