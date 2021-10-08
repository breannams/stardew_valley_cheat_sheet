import React, {Component} from 'react'
import {addFarm} from '../../actions/farmActions'
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'
class FarmForm extends Component{
   state = {
        farm_name: "",
        farm_type: "",
        pet_type: "",
        user_id: ""
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
        this.props.history.push('/games')}
        else {
            this.props.history.push('/farms')
        }
    }

    static getDerivedStateFromProps(props,state){

        return {user_id: props.userData.id}
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