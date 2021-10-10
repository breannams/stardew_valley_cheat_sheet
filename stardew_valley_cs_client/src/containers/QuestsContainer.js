import {Component} from 'react'
import {connect} from 'react-redux'

import {fetchQuests} from '../actions/questsActions'
import QuestsPage from '../components/Pages/QuestsPage'

export class QuestsContainer extends Component{

    componentDidMount(){
        this.props.fetchQuests()
    }

    render (){
        let quests = this.props.quests
        let questsarr = this.props.quests[0]
    
        return (
            <>
            
            { quests.length > 0 ?
            <QuestsPage quests = {questsarr} />
            :
            < QuestsPage quests = {quests} />
        }
                
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {quests: state.quests}
}

export default connect(mapStateToProps, {fetchQuests})(QuestsContainer)