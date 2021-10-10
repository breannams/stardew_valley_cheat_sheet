import {Component} from 'react'
import GameNavBar from '../../components/Navs/GameNav'

export default class QuestsPage extends Component{
    
    render(){
        let quests = this.props.quests
        return(
            <div>
                  <br></br>
                  {GameNavBar()}
                  <div>
                      <h1>Quests:</h1>
                      {
                          quests.map(quest =>
                            <div key = {quest.id}>
                                <h2><u>{quest.name}</u></h2>
                                    <h4>
                                        quest type: {quest.type}<br></br>
                                        description: {quest.description}<br></br>
                                        start by: {quest.start_by}<br></br>
                                        requirements to complete: {quest.requirements}<br></br> 
                                        rewards: {quest.rewards}<br></br>
                                    </h4>
                            </div>
                            )
                      }
                  </div>
            </div>
        )
    }
}