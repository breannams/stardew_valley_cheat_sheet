import React, {Component} from 'react'
import {addFarm} from '../../actions/farmActions'
import {connect} from 'react-redux'
import history from '../../helpers/history'
class FarmForm extends Component{
   constructor(){
        super()
        this.state = {
            farm_name: "",
            farm_type: "",
            pet_type: "",
            user_id: ""
        }
    }
    componentDidMount(){
    
        this.setState({user_id: this.props.userData.id})
    
    }
    handleChange = (event) => {
      this.setState({
            [event.target.name]: event.target.value
        })

    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.farm_name && this.state.farm_type && this.state.pet_type){
            this.props.addFarm(this.state)
            history.push('/home')}
        else {
            history.push('/farms')
        }
    }

    render (){

        return(
            <>
            <form onSubmit = {this.handleSubmit}>
                <label>Farm Name:</label>
                <input type = "text" value = {this.state.farm_name} onChange={this.handleChange} name = "farm_name" />

            <label> Farm Type: </label>
                <select value = {this.state.farm_type} onChange = {this.handleChange} name = "farm_type">
                    <option value = "select"> Select... </option>
                    <option value = "standard">Standard Farm</option>
                    <option value = "Riverland">Riverland Farm</option>
                    <option value = "Forest">Forest Farm</option>
                    <option value = "Hill-top">Hill-top Farm</option>
                    <option value = "Wilderness">Wilderness Farm</option>
                    <option value = "Four-Corners">Four Corners Farm</option>
                    <option value = "Beach">Beach Farm</option>
                </select>

                <label>Pet Type: </label>
                <select value = {this.state.pet_type} onChange = {this.handleChange} name = "pet_type">
                    <option value = "select">Select...</option>
                    <option value = "cat">Orange Cat</option>
                    <option value = "cat2">Grey Cat</option>
                    <option value = "cat3">Golden Cat</option>
                    <option value = "dog1">Blue Collar Dog</option>
                    <option value = "dog2">Pointed Ear Dog</option>
                    <option value = "dog3">Red Collar Dog</option>
                </select>
                <input type = "submit" value = "Create your Farm!"/>
            </form>

            {/* <div className = "Farm-Info">
                <h3>Click on the following to learn more about each type of farm:</h3>
            ***add farm buttons here lol***

            ***add picture of pet types here***
            </div> */}
            </>
        )
    }
}


export default connect(null, { addFarm }) (FarmForm)