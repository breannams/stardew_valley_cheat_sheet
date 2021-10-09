import {NavLink} from 'react-router-dom'
import history from '../../helpers/history';

const link = {
    width: "100px",
    padding: "13px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };
  
export const startGameButton = () => {
    return (
      <div>
        <NavLink
        to = "/farms"
        exact
        className = "btn"
        style = {link}
        activeStyle = {
          {background : "darkgray"}
        }
    >
    Yes! I'm ready for my new life! 
    </NavLink>
      </div>
    )
  }

  export const LoginButton = () => {
    return (
      <div>
        <NavLink
        to = "/login"
        exact
        style = {link}
        activeStyle = {
          {background: "darkgray"}
        }
        >
          Login
          </NavLink>
      </div>
    )
  }

  export const SignupButton = () => {
    return (
      <div>
        <NavLink
        to = "/signup"
        exact
        style = {link}
        activeStyle = {
          {background: "darkgray"}
        }
    >
  SignUp
  </NavLink>
  </div>
    )
  }


 const handleLogout = () => {
  localStorage.clear()
  history.push("/")
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
    No! I want to stay at Joja corp in my boring cubicle forever!(Logout)
    </NavLink>
      </div>
      )
  }