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
            <div>Quests Container
                  {GameNavBar()}
            </div>
        )
    }
}




export default connect(null, {fetchQuests})(QuestsContainer)