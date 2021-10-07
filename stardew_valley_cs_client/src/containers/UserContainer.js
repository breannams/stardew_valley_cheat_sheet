import {Component} from 'react'
import {startGameButton, logOutButton} from '../components/HomePageNavs'

class UserContainer extends Component {
  
      render (){
        return (
          <div className="App">
      
            <header className = "App-header">
            <div>
                <h2>Congratulations on your new start away from the corporate overlord Joja Corp! You have inherited your grandfather's old farm land in Stardew Valley. It is definitely a new change of pace from your office cubicle. But don't you worry! You'll meet many friendly and helpful villagers and learn the tricks of the trade along the way.</h2>
                <h3>Are you ready to start your new adventure??</h3>
                {startGameButton()}
              <br></br>
              <br></br>
               {logOutButton()}
            </div>
      
           </header>
       
          </div>
        );
      }
}

export default UserContainer
