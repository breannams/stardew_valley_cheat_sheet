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
     
        
        return (
            <div>
             
             < GamesPage farm = {farm}/>
          
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