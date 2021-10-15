import {Component} from 'react'
import GameNavBar from '../../components/Navs/GameNavBar'

export default class VillagersPage extends Component {
    render () {
        let villagers = this.props.villagers
        return(
            <div>
                  <br></br>
              {GameNavBar()}
              <div>
                  <h1>Villagers:</h1>
                  {
                      villagers.map(villager =>
                        <div key = {villager.id}>
                            <h2><u>{villager.name}</u></h2>
                            <h4>
                                birthday: {villager.birthday}<br></br>
                                best gifts: {villager.gifts}<br></br>
                                heart events at {villager.heartevents} heart levels <br></br>
                                available to marry? {villager.marriage === true ? "Yes" : "No"}
                            </h4>
                        </div>
                        )
                  }
              </div>
            </div>
        )
    }
}