import {Component} from 'react'
import GameNavBar from '../../components/Navs/GameNav'
import FarmForm from '../../components/Forms/FarmForm'
export default class GamesPage extends Component {

    render(){
        let farm = this.props.farm
        const userData = JSON.parse(localStorage.getItem("user"))
       
        return(
            <>{ 
                farm && 
                farm.length > 0 ?
                <div>
                <h1>Welcome to {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h1>
                { GameNavBar() }
                 </div>
                :
                <div>
                <h1>Welcome to the Valley, {userData.username}. The first step on your new journey is to set up your grandfather's farm. </h1>
                <FarmForm userData = {userData} />
                </div>
             }   
             
               
            
            </>
        )
    }


}