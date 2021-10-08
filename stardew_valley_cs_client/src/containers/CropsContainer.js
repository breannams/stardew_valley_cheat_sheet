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
            <>
            <br></br>
                  {GameNavBar()}
                  <div>
                      <h1>Crops: </h1>
                      {
                          this.props.crops.map(crop =>
                            <div>
                                <h2 key = {crop.id}><u>{crop.name}</u></h2>
                                <h4>
                                    cost: {crop.cost}<br></br>
                                    uses: {crop.uses}<br></br>
                                    season(s) available: {crop.season} <br></br>
                                    grow time: {crop.grow_time}<br></br>
                                    sell price: {crop.sell_price}
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
    return{crops: state.crops}
}


export default connect(mapStateToProps, {fetchCrops})(CropsContainer)