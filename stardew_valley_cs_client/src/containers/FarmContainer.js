import {Component} from 'react'
import FarmForm from '../components/FarmForm'

export default class GamesContainer extends Component {
    state = {
        user: {},
        error: ''
      }

    componentDidMount () {
        this.validation()
     }

  validation =() =>{
    let token = localStorage.getItem('token')

    if (token){
    fetch('http://localhost:3000/home', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then (resp => resp.json())
    .then (user => {

      if(user.id){
        this.setState({
          user: user
        }) 
      }
 
    })

    }
     
  }

    render (){
        const userData = this.state.user
      const history = this.props.history
        return(
            <div>
                Welcome To Stardew Valley  {userData.username}! The first step on your new journey is to set up your grandfather's farm.

               <FarmForm userData = {userData} history = {history}/>
           
            </div>
        )
    }
}