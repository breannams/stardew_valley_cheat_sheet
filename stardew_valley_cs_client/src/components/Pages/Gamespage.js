import {Component} from 'react'
import GameNavBar from '../../components/Navs/GameNav'
import FarmForm from '../../components/Forms/FarmForm'
export default class GamesPage extends Component {

    render(){
        let farm = this.props.farm
        let userData = this.props.userData
        return(
            <>
                {  farm && farm.length > 0 ?
                    <div>
                        <h1>Welcome to {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h1>
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

/////Would like to make this an auth only page so i dont have to do ^^^^^^ two ? : 's