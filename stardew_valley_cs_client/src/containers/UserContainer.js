import {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserFarm} from '../actions/farmActions'
import {UserHomePage} from '../components/Pages/UserHomePage'
class UserContainer extends Component  {
  
  componentDidMount(){
    this.props.fetchUserFarm() 
    let userData = JSON.parse(localStorage.getItem("user"))
    if (!userData){
      this.props.history.push("/")
    }
  }

      render (){
        const farm = this.props.farm
    
        let userData = JSON.parse(localStorage.getItem("user"))
        return (
          <div>
       < UserHomePage farm = {farm} userData = {userData}/>
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