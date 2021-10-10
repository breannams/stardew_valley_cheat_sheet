import { Component } from "react";
import GameNavBar from '../../components/Navs/GameNav'

export default class FestivalsPage extends Component {

    render () {
        let festivals = this.props.festivals
        return (
            <div>
                <br></br>
                  {GameNavBar()}
                  <div>
                      <h1>Festivals:</h1>
                      {
                          festivals.map(festival =>
                            <div>
                                <h2 key = {festival.id}><u>{festival.name}</u></h2>
                                <h4>
                                    date,time,location: {festival.date} - {festival.time_location}<br></br>
                                    description: {festival.description}<br></br>
                                    items available to purchase: {festival.purchases}
                                </h4>
                            </div>
                            )
                      }
                  </div>
            </div>
        )
    }

}