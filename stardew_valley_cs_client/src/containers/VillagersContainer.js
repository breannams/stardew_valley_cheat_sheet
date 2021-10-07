import {Component} from 'react'
import {connect} from 'react-redux'
import { fetchVillagers } from '../actions/villagerActions'
import GameNavBar from '../components/Navs/GameNav'

export class VillagersContainer extends Component{

componentDidMount(){
    this.props.fetchVillagers()
}

render(){
    return(
        <div>Villager Container
              {GameNavBar()}
        </div>
    )
}
}


export default connect(null, {fetchVillagers})(VillagersContainer)