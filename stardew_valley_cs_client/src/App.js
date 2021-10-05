
import './App.css';
import React, {Component} from 'react'

import LoginSignupcontainer from './components/containers/LoginSignupcontainer';
import VillagersContainer from './components/containers/VillagersContainer'

export class App extends Component{



 render (){
  return (
    <div className="App">

      <header className = "App-header">
         <LoginSignupcontainer />
         <VillagersContainer />
     </header>
 

    </div>
  );
}
}

export default App;
