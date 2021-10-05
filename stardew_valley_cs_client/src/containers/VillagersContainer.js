import {Component} from 'react'
import {connect} from 'react-redux'
import { fetchVillagers } from '../actions/villagerActions'


export class VillagersContainer extends Component{

componentDidMount(){
    this.props.fetchVillagers()
}

render(){
    return(
        <div>Villager Container</div>
    )
}
}


export default connect(null, {fetchVillagers})(VillagersContainer)