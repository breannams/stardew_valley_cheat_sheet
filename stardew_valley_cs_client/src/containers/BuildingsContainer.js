import {Component} from 'react'
import {connect} from 'react-redux'
import { fetchBuildings } from '../actions/buildingActions'
import BuildingsPage from '../components/Pages/BuildingsPage'


export class BuildingsContainer extends Component{

    componentDidMount() {
        this.props.fetchBuildings()
    }
    render(){
        let buildings = this.props.buildings
        return(
            <>
                <BuildingsPage buildings = {buildings} />          
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{buildings: state.buildings}
}
export default connect(mapStateToProps, {fetchBuildings})(BuildingsContainer)