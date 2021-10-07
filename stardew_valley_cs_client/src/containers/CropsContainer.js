import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
export default class CropsContainer extends Component {
    render (){
        return(
            <div>Crops Container
                  {GameNavBar()}
            </div>
        )
    }
}