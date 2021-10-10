import {Component} from 'react'
import {connect} from 'react-redux'
import  {fetchVillagers}  from '../actions/villagerActions'
import VillagersPage from '../components/Pages/VillagersPage'

export class VillagersContainer extends Component{

componentDidMount(){
    this.props.fetchVillagers()
}

render(){
    let villagers = this.props.villagers
    let villagersarr = this.props.villagers[0]
    return(
        <>
            { villagers.length > 0 ?
                <VillagersPage villagers = {villagersarr} />
                :
                <VillagersPage villagers = {villagers} />
            }
        </>
    )
}
}
const mapStatetoProps = (state) => {
    return{villagers: state.villagers}
}

export default connect(mapStatetoProps, {fetchVillagers})(VillagersContainer)