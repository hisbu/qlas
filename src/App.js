import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Landing from './pages/landingPage.js'
import NavBar2 from './component/secondNavBar'
import DashboardUser from './pages/user/dashboardUser'
import NotFound from './pages/notFound'


class App extends Component{
  render(){
    return(
      <div>
        {/* <NavBar2/> */}
        <Switch>
          <Route path='/' component={Landing} exact/>
          <Route path ='/user' component = {DashboardUser}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;
