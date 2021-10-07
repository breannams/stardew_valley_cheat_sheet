import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
export default class QuestsContainer extends Component{

    render (){
        return (
            <div>Quests Container
                  {GameNavBar()}
            </div>
        )
    }
}