import {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserFarm} from '../actions/farmActions'
import {UserHomePage} from '../components/Pages/UserHomePage'
class UserContainer extends Component  {
  
  componentDidMount(){
    this.props.fetchUserFarm() 

  }

      render (){
        let farm = this.props.farm
        let farmarr = this.props.farm[0]
        let userData = JSON.parse(localStorage.getItem("user"))
        return (
          <div>
            { farm.length > 0 ?
                < UserHomePage farm = {farmarr} userData = {userData}/>
                :
                <UserHomePage farm = {farm} userData = {userData} />
            }
          </div>
        );
      }
}

const mapStateToProps = (state) => {

    return{
  farm: state.farms
    }
}
export default connect(mapStateToProps, {fetchUserFarm})(UserContainer)