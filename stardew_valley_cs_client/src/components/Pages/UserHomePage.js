import {Component} from 'react'
import GameNavBar from '../Navs/GameNavBar'


export class UserHomePage extends Component {

    render(){
        let farm = this.props.farm
        return(
            <>
                    <div>
                
                        { farm.length > 0 ?
                            <h2>Welcome to your new farm, {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants. </h2>
                        : 
                            <h2>Welcome to your new farm,  {farm.farm_name}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants. </h2>
                        } 
                           { GameNavBar() }
                    </div>
            </>
        )
    }


}
export default UserHomePage