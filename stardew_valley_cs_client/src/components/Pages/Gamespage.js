import {Component} from 'react'
import GameNavBar from '../../components/Navs/GameNav'
export default class GamesPage extends Component {

    render(){
        let farm = this.props.farm

        return(
            <div>
                <h1>Welcome to {farm.map(userfarm => userfarm.farm_name)}! Congratulations on finally moving in. Click on the bellow options to learn more about Stardew Valley and it's inhabitants </h1>
             { GameNavBar() }
       
            </div>
        )
    }


}