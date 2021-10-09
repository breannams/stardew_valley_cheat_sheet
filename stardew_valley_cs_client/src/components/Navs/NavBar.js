import { Component } from 'react';
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

  const  link = {
        width: "100px",
        padding: "13px",
        margin: "0 6px 6px",
        background: "grey",
        textDecoration: "none",
        color: "white",
      };
    
    

       
export class NavBar extends Component {
   handleLogout = () => {
        localStorage.clear()
       this.props.history.push("/")
       }
    render(){
      debugger
      let user = localStorage.getItem("user")
      return(
        <div>
          
            { user !==null ?
            <div>
            <NavLink to = "/" exact style = {link} onClick = {this.handleLogout}> Logout </NavLink> 
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


        </div>
      )
    }
}

export default withRouter(NavBar)