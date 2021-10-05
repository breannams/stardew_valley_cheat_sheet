
import './App.css';
import React, {Component} from 'react'

import LoginSignupcontainer from './components/containers/LoginSignupcontainer';

export class App extends Component{



 render (){
  return (
    <div className="App">

      <header className = "App-header">
          
         <LoginSignupcontainer />
     </header>
 

    </div>
  );
}
}

export default App;
