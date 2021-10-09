import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: "100px",
    padding: "13px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };


  const GameNavBar = () => {
    return(
      <div className = "gameNav">
       
        <NavLink to= "/animals" exact style = {link}>Animals</NavLink>
        <NavLink to = "/buildings" exact style = {link}>Buildings</NavLink>
        <NavLink to = "/festivals" exact style = {link}>Festivals</NavLink>
        <NavLink to = "quests" exact style = {link}>Quests</NavLink>
        <NavLink to = "villagers" exact style = {link}>Villagers</NavLink>

      </div>
    )
  }

  export default GameNavBar