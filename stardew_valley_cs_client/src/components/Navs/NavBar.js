import {NavLink} from 'react-router-dom'
import { Component } from 'react';

   export class NavBar extends Component () {
      // link = {
      //   width: "100px",
      //   padding: "13px",
      //   margin: "0 6px 6px",
      //   background: "grey",
      //   textDecoration: "none",
      //   color: "white",
      // };
    
      // handleLogout = () => {
      //   localStorage.clear()
      //  }

      render(){
      
        return (
          <div>
            {/* {user ? 
            <div>
            <NavLink to = "/" exact style = {link} onClick = {handleLogout}> Logout </NavLink> 
            <NavLink to = "/about" exact style = {link}>About</NavLink>
            <NavLink to = "/games" exact style = {link}>Home</NavLink>
            <br></br>
            <br></br>
            </div> 
            
            :
               <div>
               <NavLink to = "/about" exact style = {link}>About</NavLink>
               <NavLink to = "/" exact style = {link}>Home </NavLink>  
              <br></br>
              <br></br>
               </div>
           }
        */}
        </div>
        )
      }
    }

    export default NavBar