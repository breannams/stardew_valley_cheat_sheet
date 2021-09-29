
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login'
// import Welcome from './components/welcome'
// import Logout from './components/logout'
export class App extends Component{

  responseGoogle = (response) =>{
    console.log(response)
    console.log(response.profileObj)
  }

 render (){
  return (
    <div className="App">
     {/* <header className = "App-header">
       Welcome to your stardew valley cheat sheet 
     </header> */}
    <Router>
      <Route exact path = '/' component = {Login} />
      {/* <Route exact path = '/welcome' component = {Welcome} /> */}
    </Router>
    </div>
  );
}
}
export default App;
