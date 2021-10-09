import {Component} from 'react'
import {connect} from 'react-redux'

import {fetchUserFarm} from '../actions/farmActions'
import GamesPage from '../components/Pages/Gamespage'

export  class GamesContainer extends Component{
 
    componentDidMount(){
            this.props.fetchUserFarm() 
      }

    render (){
        let farm = this.props.farms.farm 
        const userData = JSON.parse(localStorage.getItem("user"))
        
        return (
            <div>
             
             < GamesPage farm = {farm} userData = {userData}/>
          
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