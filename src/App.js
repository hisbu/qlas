import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
// page
import LandingPage from './pages/landingPage'
// import Landing from './pages/landing.js'
import DashboardUser from './pages/user/dashboardUser'
import NotFound from './pages/notFound'
import TestPage from './pages/test'
import DetailQelas from './pages/detailKelas/detailQelasPage'
import NavBar from './component/navBar'
import Footer from './component/footer'
import Login from './pages/registerLogin/login'
import Register from './pages/registerLogin/register'
import { keepLogin } from './redux/actions'
import LoadingPage from './pages/loadingPage'
import Verified from './pages/registerLogin/verifikasi'
import WaitingVerification from './pages/registerLogin/WaitingVerification'
import Profile from './pages/user/profile'
import ManageKelas from './pages/kelasNmodule/manageKelas'


class App extends Component{
  componentDidMount(){
    this.props.keepLogin()
    var id = window.location.href
    console.log(id)
    console.log(this.props.username)
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
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/verified' component={Verified}/>
          <Route path='/waitingverification' component={WaitingVerification}/>
          <Route path='/loading' component={LoadingPage}/>
          <Route path='/profile' component={Profile}/>

          <Route path='/managekelas' component={ManageKelas}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) =>{
  return{
    username    : auth.username
  }
}
export default connect(mapStateToProps, {keepLogin}) (App);
