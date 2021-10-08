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
            <>
            <br></br>
                  {GameNavBar()}
                  <div>
                      <h1>Festivals:</h1>
                      {
                          this.props.festivals.map(festival =>
                            <div>
                                <h2 key = {festival.id}><u>{festival.name}</u></h2>
                                <h4>
                                    date,time,location: {festival.date} - {festival.time_location}<br></br>
                                    description: {festival.description}<br></br>
                                    items available to purchase: {festival.purchases}
                                </h4>
                            </div>
                            )
                      }
                  </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {festivals: state.festivals}
}
export default connect(mapStateToProps, {fetchFestivals})(FestivalsContainer)