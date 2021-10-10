import {Component} from 'react'
import GameNavBar from '../Navs/GameNav'
import FarmForm from '../Forms/FarmForm'

export class UserHomePage extends Component {
    

    render(){
        let farm = this.props.farm[0]
        let userData = this.props.userData

        return(
            <>
                {  farm && farm.length > 0 ?
                    <div>
                        <h1>Hello {userData.username}! </h1>
                        <h2>Welcome to your new farm, {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h2>
                        { GameNavBar() }
                    </div>
                :
                    <div>
                        { userData ?
                        <div>
                            <h1>Welcome to the Valley, {userData.username}. The first step on your new journey is to set up your grandfather's farm. </h1>
                            <FarmForm userData = {userData} />
                        </div>
                            :
                        <div>
                            <h1>Welcome to the Valley. The first step on your new journey is to set up your grandfather's farm. </h1>
                            
                            <FarmForm userData = {userData} />
                        </div>
                            }
                    </div>
             }   
             
            </>
        )
    }


}
export default UserHomePage