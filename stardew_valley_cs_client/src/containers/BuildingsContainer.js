import {Component} from 'react'
import {connect} from 'react-redux'
import { fetchBuildings } from '../actions/buildingActions'
import GameNavBar from '../components/Navs/GameNav'
export class BuildingsContainer extends Component{

    componentDidMount() {
        this.props.fetchBuildings()
    }
    render(){
        return(
            <div>BuildingsContainer
                  {GameNavBar()}
            </div>
        )
    }
}
export default connect(null, {fetchBuildings})(BuildingsContainer)