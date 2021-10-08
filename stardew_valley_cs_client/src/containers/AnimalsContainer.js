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
                  {GameNavBar()}
                <div>  
                    <h1>The animals of Stardew Valley:</h1>
                      
                      
                </div>
                

            </>
            
        )
    }
}

export default connect(null, {fetchAnimals})(AnimalsContainer)