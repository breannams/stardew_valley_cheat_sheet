import {Component} from 'react'
import {connect} from 'react-redux'

import {fetchUserFarm} from '../actions/farmActions'
import GamesPage from '../components/Pages/Gamespage'
import FarmForm from '../components/Forms/FarmForm'
export  class GamesContainer extends Component{
 
    componentDidMount(){
            this.props.fetchUserFarm() 
      }

    render (){
        let farm = this.props.farms.farm 
        const userData = JSON.parse(localStorage.getItem("user"))
        const history = this.props.history
        return (
            <div>
                {farm?
             < GamesPage farm = {farm}/>
            : 
            <FarmForm userData = {userData} history = {history}/>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
  farms: state.farms
}
}

export default connect(mapStateToProps, {fetchUserFarm})(GamesContainer)