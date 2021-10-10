import {Component} from 'react'
import GameNavBar from '../Navs/GameNav'


export class UserHomePage extends Component {
    componentDidMount(){
        if (!this.props.farm){
            this.props.history.push("/farms")
          }
          if (!this.props.userData){
            this.props.history.push("/")
          }
    }

    render(){
        let farm = this.props.farm
        let userData = this.props.userData

        return(
            <>
                    <div>
                    <h1>Hello {userData.username}! </h1>
                        { farm.length > 0 ?
                            <h2>Welcome to your new farm, {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h2>
                        : 
                            <h2>Welcome to your new farm,  {farm.farm_name}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h2>
                        } 
                           { GameNavBar() }
                    </div>
            </>
        )
    }


}
export default UserHomePage