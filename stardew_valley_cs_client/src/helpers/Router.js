import { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import UserContainer from "../containers/UserContainer";
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/Aboutpage"
import VillagersContainer from '../containers/VillagersContainer'
import BuildingsContainer from '../containers/BuildingsContainer'
import AnimalsContainer from '../containers/AnimalsContainer'
import CropsContainer from '../containers/CropsContainer'
import FestivalsContainer from '../containers/FestivalsContainer'
import QuestsContainer from '../containers/QuestsContainer'
import GamesContainer from "../containers/GamesContainer";
import SignUpForm from "../components/Forms/SignUpForm";
import LoginForm from "../components/Forms/LoginForm";
import FarmContainer from '../containers/FarmContainer'

export class Router extends Component {
    render(){
  const user = this.props.user
 
    return(
        <Switch>
            <Route exact path = "/" render={(props) => <HomePage {...props} user = {user} />} />
            <Route exact path = "/about" component = {AboutPage} />
            <Route exact path = '/home' component = {UserContainer} />
            <Route exact path = "/signup" component = {SignUpForm} />
            <Route exact path = '/login' component = {LoginForm} />

            <Route path = '/villagers' component = {VillagersContainer} />
            <Route path = '/buildings' component = {BuildingsContainer} />
            <Route path = '/animals' component = {AnimalsContainer} />
            <Route path = "/crops" component = {CropsContainer} />
            <Route path = "/festivals" component = {FestivalsContainer} />
            <Route path = "/quests" component = {QuestsContainer} />
            <Route path = "/games" component = {GamesContainer} />
            <Route path = "/farms" component = {FarmContainer} />
            
        </Switch>
    )
}}
export default Router