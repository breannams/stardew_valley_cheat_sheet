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
   this.props.history.push('/')
   }
  
    export const logOutButton = () => {
        return (
          <div>
          <NavLink
          to = "/"
          exact
          style = {link}
          activeStyle = {
            {background : "darkgray"}
          }
          onClick = {handleLogout}
      >
             Logout
      </NavLink>
        </div>
        )
    }