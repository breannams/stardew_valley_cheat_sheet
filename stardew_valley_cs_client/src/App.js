
import './App.css';
import React, {Component} from 'react'
import {NavBar} from './components/Navs/NavBar'
import {connect} from 'react-redux'
import Router from './helpers/Router'
import {checkLoginStatus} from './actions/userActions'

export class App extends Component{

 componentDidMount(){
   this.props.checkLoginStatus()
 }

 render (){
  
  return (
    <div className="App">
      <header className = "App-header">
        <NavBar user = {this.props.user}/>
        <Router />
     </header>

    </div>
  );
}
}

const mapStateToProps =(state) => {
  return{
    user: state.users
  }
}

export default connect(mapStateToProps, {checkLoginStatus}) (App);
