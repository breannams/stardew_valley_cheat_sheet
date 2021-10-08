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
            <>
            <br></br>
                  {GameNavBar()}
                  <div>
                  <h1>Buildings:</h1>
                  {
                      this.props.buildings.map(building =>
                        <div>
                            <ul>
                            <h2 key = {building.id}><u>{building.name}</u></h2>
                            </ul>
                            <h4>
                                cost: {building.cost}<br></br>
                                Uses: {building.use}
                            </h4>
                            
                        </div>
                        )
                  }
                  </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{buildings: state.buildings}
}
export default connect(mapStateToProps, {fetchBuildings})(BuildingsContainer)