import {Component} from 'react'
import {connect} from 'react-redux'
import GameNavBar from '../components/Navs/GameNav'
import {fetchAnimals} from '../actions/animalActions'

export class AnimalsContainer extends Component{
    
    componentDidMount(){
        this.props.fetchAnimals()
    }

    render (){
       
        return (
            <>
            <br></br>
                  {GameNavBar()}
                <div>  
                    <h1>The animals of Stardew Valley:</h1>
                    
                      {
                          this.props.animals.map(animal => 
                          <div>
                            <h2 key = {animal.id}><u> {animal.name}</u></h2> 
                             <h4>
                            cost: {animal.cost} <br></br>
                            requirements: {animal.requirements} <br></br>
                            produces: {animal.produce}<br></br>
                            5 heart sell price: {animal.sell_price}<br></br>
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

    return{animals: state.animals}
}

export default connect(mapStateToProps, {fetchAnimals})(AnimalsContainer)