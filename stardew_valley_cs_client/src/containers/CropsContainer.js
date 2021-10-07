import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
import {fetchCrops} from '../actions/cropsActions'

export class CropsContainer extends Component {

    componentDidMount(){
        this.props.fetchCrops()
    }

    render (){
        return(
            <div>Crops Container
                  {GameNavBar()}
            </div>
        )
    }
}

export default connect(null, {fetchCrops})(CropsContainer)