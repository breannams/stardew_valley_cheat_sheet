import {Component} from 'react'
import {connect} from 'react-redux'

import {fetchUserFarm} from '../actions/farmActions'
import GamesPage from '../components/Pages/GamesPage'

export  class GamesContainer extends Component{
 
    componentDidMount(){
            this.props.fetchUserFarm() 
      }

    render (){
        let farm = this.props.farm
        return (
            <div>
             
             < GamesPage farm = {farm}/>
          
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{
  farm: state.farms
}
}

export default connect(mapStateToProps, {fetchUserFarm})(GamesContainer)