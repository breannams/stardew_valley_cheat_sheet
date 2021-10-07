import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
export default class GamesContainer extends Component{



    render (){
        return (
            <div>
                {GameNavBar()}
            </div>
        )
    }
}