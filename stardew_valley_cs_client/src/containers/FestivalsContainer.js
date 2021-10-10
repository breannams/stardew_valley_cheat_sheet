import {Component} from 'react'
import {connect} from 'react-redux'

import {fetchFestivals} from '../actions/festivalActions'
import FestivalsPage from '../components/Pages/festivalsPage'
export  class FestivalsContainer extends Component{
    componentDidMount(){
        this.props.fetchFestivals()
    }
    render (){
        let festivals = this.props.festivals
        let festivalsarr = this.props.festivals[0]
        return (
            <>  
                {   festivals.length > 0 ?
                    <FestivalsPage festivals = {festivalsarr}/>
                    :
                    <FestivalsPage festivals = {festivals} />
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {festivals: state.festivals}
}
export default connect(mapStateToProps, {fetchFestivals})(FestivalsContainer)