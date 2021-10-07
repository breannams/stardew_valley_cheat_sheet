import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'

export default class AnimalsContainer extends Component{

    render (){
        return (
            <div>Animals Contianer
                  {GameNavBar()}
            </div>
            
        )
    }
}