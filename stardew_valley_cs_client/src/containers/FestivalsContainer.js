import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
import {fetchFestivals} from '../actions/festivalActions'

export  class FestivalsContainer extends Component{
    componentDidMount(){
        this.props.fetchFestivals()
    }
    render (){
        return (
            <div>FestivalsContainer
                  {GameNavBar()}
            </div>
        )
    }
}

export default connect(null, {fetchFestivals})(FestivalsContainer)