import { Component } from "react";
import {startGameButton, logOutButton} from '../../components/Navs/HomePageNavs'
import history from "../../helpers/history";

export class UserHomePage extends Component {

    componentDidMount(){
        if (this.props.farm){
        if (this.props.farm.farm.length > 0 ){
            history.push('/games')
        }}
        debugger
    }

    render (){
        return(
            <div>
            <h2>Congratulations on your new start away from the corporate overlord Joja Corp! You have inherited your grandfather's old farm land in Stardew Valley. It is definitely a new change of pace from your office cubicle. But don't you worry! You'll meet many friendly and helpful villagers and learn the tricks of the trade along the way.</h2>
            <h3>Are you ready to start your new adventure??</h3>
                {startGameButton()}
              <br></br>
              <br></br>
                {logOutButton()}
            </div>
        )
    }


}