import {Component} from 'react'
import {connect} from 'react-redux'
import { fetchBuildings } from '../actions/buildingActions'

export class BuildingsContainer extends Component{

    componentDidMount() {
        this.props.fetchBuildings()
    }
    render(){
        return(
            <div>BuildingsContainer</div>
        )
    }
}
export default connect(null, {fetchBuildings})(BuildingsContainer)