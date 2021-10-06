
import './App.css';
import React, {Component} from 'react'

import UserContainer from './containers/UserContainer'
import VillagersContainer from './containers/VillagersContainer'
import BuildingsContainer from './containers/BuildingsContainer';

export class App extends Component{

componentDidMount(){
  localStorage.getItem('user')
}

 render (){
  return (
    <div className="App">

      <header className = "App-header">
         <UserContainer/>
         <VillagersContainer />
          <BuildingsContainer />
    
     </header>
 

    </div>
  );
}
}

export default App;
