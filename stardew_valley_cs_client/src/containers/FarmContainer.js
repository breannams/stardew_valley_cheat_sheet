import {Component} from 'react'
import FarmForm from '../components/Forms/FarmForm'

export default class FarmContainer extends Component {

    render (){
        const userData = JSON.parse(localStorage.getItem("user"))

        return(
            <div>
            <h2>Welcome To Stardew Valley  {userData.username}!
                <br></br>
                 The first step on your new journey is to set up your grandfather's farm.
            </h2>
               <FarmForm userData = {userData} />
           
            </div>
        )
    }
}
