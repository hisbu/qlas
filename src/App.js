import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

// page
import LandingPage from './pages/landingPage'
import Landing from './pages/landing.js'
import DashboardUser from './pages/user/dashboardUser'
import NotFound from './pages/notFound'
import TestPage from './pages/test'
import DetailQelas from './pages/detailKelas/detailQelasPage'
import NavBar from './component/navBar'
import Footer from './component/footer'

class App extends Component{
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
          <Route path='/dashboard/test' component={TestPage}/>
          <Route path='/detail' component={DetailQelas}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
