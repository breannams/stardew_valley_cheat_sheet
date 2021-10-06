
import './App.css';
import React, {Component} from 'react'

import HomePage from './components/HomePage'


export class App extends Component{


 render (){
  return (
    <div className="App">

      <header className = "App-header">
        <HomePage/>
 
    
     </header>
 

    </div>
  );
}
}

export default App;
