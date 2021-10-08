
import './App.css';
import React, {Component} from 'react'
import { NavBar } from './components/Navs/NavBar';

import Router from './components/Router'

export class App extends Component{


 render (){
  return (
    <div className="App">
      <header className = "App-header">
        <NavBar />
        <Router />
     </header>

    </div>
  );
}
}

export default App;
