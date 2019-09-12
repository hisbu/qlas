import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { keepLogin, kelasInit } from './redux/actions'
import Axios from 'axios'
import { API_URL } from './helpers'
import queryString from 'query-string'
// page
import LandingPage from './pages/landingPage'
// import Landing from './pages/landing.js'
import DashboardUser from './pages/user/dashboardUser'
import NotFound from './pages/notFound'
import TestPage from './pages/test'
import DetailQelas from './pages/kelasNmodule/detailQelasPage'
import NavBar from './component/navBar'
import Footer from './component/footer'
import Login from './pages/registerLogin/login'
import Register from './pages/registerLogin/register'
import LoadingPage from './pages/loadingPage'
import Verified from './pages/registerLogin/verifikasi'
import WaitingVerification from './pages/registerLogin/WaitingVerification'
import Profile from './pages/user/profile'
import ManageKelas from './pages/kelasNmodule/manageKelas'


class App extends Component{
  state = {
      kelasData:''
  }
  componentDidMount(){
    this.props.keepLogin()
    var id = window.location.href
    // var test = this.props.match.params.kelasId
    // let url = this.props.location.pathname;
    // let params = queryString.parse(url);
    // console.log(id)
    // console.log(params)
    // console.log(this.props.username)

    Axios.get(`${API_URL}/kelas/getKelas`)
        .then((res)=>{
            console.log(res.data)
            console.log(res.data[0].kelasName)
            // this.setState({kelasData: res.data})
            this.props.kelasInit(res.data)
        }).catch((err)=>{
            console.log(err)
        })
  }

  componentDidUpdate(){
    // this.props.kelasInit(this.state.kelasData)
  }
  render(){
    console.log(this.state.kelasData)
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
export default connect(mapStateToProps, {keepLogin, kelasInit}) (App);
