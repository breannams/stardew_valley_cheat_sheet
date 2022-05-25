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
        let animalsarr = this.props.animals[0]
        return (
            <>
                { animals.length > 0 ?
                    < AnimalsPage animals = {animalsarr} />
                    :
                    <AnimalsPage animals = {animals} />
                }   
                This is a test for github
            </>
            
        )
    }
}


const mapStateToProps = (state) => {

    return{animals: state.animals}
}

export default connect(mapStateToProps, {fetchAnimals})(AnimalsContainer)