import {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserFarm} from '../actions/farmActions'

import {UserHomePage} from '../components/Pages/UserHomePage'
import history from "../helpers/history";
class UserContainer extends Component  {

  componentDidMount(){
    this.props.fetchUserFarm() 

    if (!this.props.farm ){
    history.push('/games')}
}
  

      render (){
        let farm = this.props.farm
        let farmarr = this.props.farm[0]
        
        return (
          <div>
            { farm.length > 0 ?
                < UserHomePage farm = {farmarr}/>
                :
                <UserHomePage farm = {farm} />
           }

            
          </div>
        );
      }
}

const mapStateToProps = (state) => {

    return{
  farm: state.farms,

    }
}


export default connect(mapStateToProps, {fetchUserFarm})(UserContainer)