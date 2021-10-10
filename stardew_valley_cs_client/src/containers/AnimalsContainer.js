import {Component} from 'react'
import {connect} from 'react-redux'

import {fetchAnimals} from '../actions/animalActions'
import AnimalsPage from '../components/Pages/AnimalsPage'

export class AnimalsContainer extends Component{
    
    componentDidMount(){
        this.props.fetchAnimals()
    }

    render (){
        let animals = this.props.animals
        return (
            <>
            < AnimalsPage animals = {animals} />
            </>
            
        )
    }
}


const mapStateToProps = (state) => {

    return{animals: state.animals}
}

export default connect(mapStateToProps, {fetchAnimals})(AnimalsContainer)