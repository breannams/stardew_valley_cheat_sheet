import {Component} from 'react'
import {connect} from 'react-redux'
import  {fetchVillagers}  from '../actions/villagerActions'
import GameNavBar from '../components/Navs/GameNav'

export class VillagersContainer extends Component{

componentDidMount(){
    this.props.fetchVillagers()
}

render(){
    return(
        <>
        <br></br>
              {GameNavBar()}
              <div>
                  <h1>Villagers:</h1>
                  {
                      this.props.villagers.map(villager =>
                        <div key = {villager.id}>
                            <h2><u>{villager.name}</u></h2>
                            <h4>
                                birthday: {villager.birthday}<br></br>
                                best gifts: {villager.gifts}<br></br>
                                heart events at {villager.heartevents} heart levels <br></br>
                                available to marry? {villager.marriage === true ? "Yes" : "No"}
                            </h4>
                        </div>
                        )
                  }
              </div>
        </>
    )
}
}
const mapStatetoProps = (state) => {
    return{villagers: state.villagers}
}

export default connect(mapStatetoProps, {fetchVillagers})(VillagersContainer)