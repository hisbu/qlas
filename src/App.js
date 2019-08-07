import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Landing from './pages/landingPage.js'

import DashboardUser from './pages/user/dashboardUser'
import NotFound from './pages/notFound'
import TestPage from './pages/test'


class App extends Component{
  render(){
    return(
      <div>
        {/* <NavBar2/> */}
        <Switch>
          <Route path='/' component={Landing} exact/>
          <Route path ='/dashboard' component = {DashboardUser}/>
          <Route path='/test' component={TestPage}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;
