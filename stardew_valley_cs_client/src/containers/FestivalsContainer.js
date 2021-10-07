import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
export default class FestivalsContainer extends Component{

    render (){
        return (
            <div>FestivalsContainer
                  {GameNavBar()}
            </div>
        )
    }
}