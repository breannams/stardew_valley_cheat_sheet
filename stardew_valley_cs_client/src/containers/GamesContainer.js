import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
import {fetchUserFarm} from '../actions/farmActions'

export  class GamesContainer extends Component{
    state = {
        farms: ""
    }

    componentDidMount(){
        setTimeout(
            this.props.fetchUserFarm(), 100) 
          
      }

    render (){
        let farm = this.props.farms.farm 
  
        return (
            <div>
              {this.props.farms != 0 ? 
              <div>
       <h1>Welcome to {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h1>
      { GameNavBar() }
       </div>
       :
       GameNavBar()
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