import { Component } from "react";
import GameNavBar from '../../components/Navs/GameNavBar'

export default class BuildingsPage extends Component {

    render () {
        let buildings = this.props.buildings
        return(
            <div>
                <br></br>
                  {GameNavBar()}
                  <div>
                  <h1>Buildings:</h1>
                  {
                     buildings.map(building =>
                        <div>
                            <ul>
                            <h2 key = {building.id}><u>{building.name}</u></h2>
                            </ul>
                            <h4>
                                cost: {building.cost}<br></br>
                                Uses: {building.use}
                            </h4>
                            
                        </div>
                        )
                  }
                  </div>
            </div>
        )
    }


}