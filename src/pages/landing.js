import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

// page
import LandingPage from './landingPage'
import DashboardUser from './user/dashboardUser'
import NotFound from './notFound'
import TestPage from './test'
import DetailQelas from './../pages/detailKelas/detailQelasPage'
import NavBar from './../component/navBar'


class Landing extends Component{
  componentDidMount(){
    var id = window.location.href
    console.log(id)
  }
  render(){
    // console.log(this.props.location)
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route path='/' component={LandingPage} exact/>
          <Route path ='/dashboard' component = {DashboardUser}/>
          <Route path='/test' component={TestPage}/>
          <Route path='/detail' component={DetailQelas}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default Landing;
