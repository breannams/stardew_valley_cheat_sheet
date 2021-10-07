import {Component} from 'react'
import {connect} from 'react-redux'
import FarmForm from '../components/FarmForm'
export default class GamesContainer extends Component {
    state = {
        user: {},
        error: ''
      }
      

    render (){
        const userData = this.state.user
        debugger
        return(
            <div>
                Make your new farm!
           
            </div>
        )
    }
}