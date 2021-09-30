
import './App.css';
import React, {Component} from 'react'

import LoginSignupcontainer from './components/containers/LoginSignupcontainer';

export class App extends Component{



 render (){
  return (
    <div className="App">

      <header className = "App-header">
          <h1>Welcome to Stardew Valley! Please sign up or login bellow to start your farming adventure!</h1>
         <LoginSignupcontainer />
     </header>
 

    </div>
  );
}
}

export default App;
