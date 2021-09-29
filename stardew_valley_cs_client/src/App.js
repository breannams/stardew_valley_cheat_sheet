
import './App.css';
import React, {Component} from 'react'
import Homepage from './components/Homepage';

export class App extends Component{

 render (){
  return (
    <div className="App">

      <header className = "App-header">
      <Homepage />
     </header>
 

    </div>
  );
}
}


export default App;



  // state = {
  //   user: {},
  //   error: ''
  // }

  // componentDidMount () {
  //   this.ValidateUsers
  // }

  // TO DO: put these in another file and import them CREATE CONTAINER FOR LOGIN/SIGNUP


// validation =() =>{
//   let token = localStorage.getItem('token')
//   if (token){
//   fetch('http://localhost:3000/profile', {
//     headers: {
//       "Authorization": `Bearer ${token}`
//     }
//   })
//   .then (resp => resp.json())
//   .then (user => {
//     if(user.id){
//       this.setState({
//         user: user
//       })
//     }
//   })
// }
// }

  // signUp = user => {
  //   fetch('http://localhost:3000/users', {
  //     method: "POST",
  //     headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user:{
  //         username: user.username,
  //         password: user.password,
  //         email: user.email,
  //         admin: user.admin
  //       }
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(user => this.setState({ user: user }) )
  // }

  // logIn = (user) => {
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: user.username,
  //         password: user.password
  //       }
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => {
  //     if (resp.token){
  //       localStorage.setItem('token', resp.token)
  //       this.setState({
  //           user: resp.user
  //           })
  //       }
  //       else {
  //           this.setState({
  //               error: resp.error
  //           })
  //     }
  //   })
  // }

  // handleLogout = () => {
  
  //   localStorage.removeItem ("token")
  // }

/////////////
