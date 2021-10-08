import {NavLink} from 'react-router-dom'
const link = {
    width: "100px",
    padding: "13px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };


  const handleLogout = () => {
    localStorage.clear()
   }
  
    export const NavBar = () => {
      let user = localStorage.getItem("user")
      debugger
        return (
          <div>
            {user ? 
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
       
        </div>
        )
    }