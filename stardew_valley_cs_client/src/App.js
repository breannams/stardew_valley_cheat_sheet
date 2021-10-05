
import './App.css';
import React, {Component} from 'react'

import LoginSignupcontainer from './containers/LoginSignupcontainer';
import VillagersContainer from './containers/VillagersContainer'
import BuildingsContainer from './containers/BuildingsContainer';
export class App extends Component{


 render (){
  return (
    <div className="App">

      <header className = "App-header">
         <LoginSignupcontainer />
         <VillagersContainer />
          <BuildingsContainer />
     </header>
 

    </div>
  );
}
}

export default App;
