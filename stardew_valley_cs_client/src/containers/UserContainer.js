import {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserFarm} from '../actions/farmActions'
import {UserHomePage} from '../components/Pages/UserHomePage'
class UserContainer extends Component  {
  
  componentDidMount(){
    this.props.fetchUserFarm() 
  
  }

      render (){
        const farm = this.props.farm  
        
        return (
          <div>
       < UserHomePage farm = {farm} />
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