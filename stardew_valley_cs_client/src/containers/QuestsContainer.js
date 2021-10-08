import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
import {fetchQuests} from '../actions/questsActions'


export class QuestsContainer extends Component{

    componentDidMount(){
        this.props.fetchQuests()
    }

    render (){
        return (
            <>
                <br></br>
                  {GameNavBar()}
                  <div>
                      <h1>Quests:</h1>
                      {
                          this.props.quests.map(quest =>
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
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {quests: state.quests}
}

export default connect(mapStateToProps, {fetchQuests})(QuestsContainer)