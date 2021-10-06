
import './App.css';
import React, {Component} from 'react'

import UserContainer from './containers/UserContainer'


export class App extends Component{


 render (){
  return (
    <div className="App">

      <header className = "App-header">
        <UserContainer/>
 
    
     </header>
 

    </div>
  );
}
}

export default App;
