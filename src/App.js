import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { keepLogin, kelasInit, paketInit } from './redux/actions'
import Axios from 'axios'
import { API_URL } from './helpers'
// import queryString from 'query-string'
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
import Payment from './pages/transaksi/payment'
import Subscribe from './pages/transaksi/subscribe'
import ConfirmPage from './pages/transaksi/konfirmasi'
import ManageKonfirmasi from './pages/Admin/manageKonfirmasi'
import Subscription from './pages/user/subscription'
import ManageModul from './pages/kelasNmodule/manageModul'
import DetailModul from './pages/materi/detailModul'
import ListKelas from './pages/kelasNmodule/listKelas'
import HomeAdmin from './pages/Admin/dashboardAdmin'
import Kelasku from './pages/user/kelasKu'
import ManageTransaksi from './pages/Admin/manageTransaksi'
import ManageUser from './pages/Admin/manageUser'
class App extends Component{
  state = {
      kelasData:''
  }
  componentDidMount(){
    this.props.keepLogin()
    // var id = window.location.href
    // var test = this.props.match.params.kelasId
    // let url = this.props.location.pathname;
    // let params = queryString.parse(url);
    // console.log(id)
    // console.log(params)
    console.log(this.props.username)
    console.log(this.props.userId)
    this.props.paketInit()

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
    console.log(this.state.kelasData)
    console.log(this.props.username)
    console.log(this.props.userId)
    // this.props.kelasInit(this.state.kelasData)
  }
  render(){
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route path='/' component={LandingPage} exact/>
          <Route path ='/dashboard' component = {DashboardUser}/>
          <Route path='/dashboard/test' component={TestPage}/>
          <Route path='/dashboard/subscription' component={Subscription}/>
          <Route path='/subscription' component={Subscription}/>
          <Route path='/detail' component={DetailQelas}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/verified' component={Verified}/>
          <Route path='/waitingverification' component={WaitingVerification}/>
          <Route path='/loading' component={LoadingPage}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/payment' component={Payment}/>
          <Route path='/managekelas' component={ManageKelas}/>
          <Route path='/subscribe' component={Subscribe}/>
          <Route path='/confirmation' component={ConfirmPage}/>
          <Route path='/manageKonf' component={ManageKonfirmasi}/>
          <Route path='/manageModul' component={ManageModul}/>
          <Route path='/detailModul' component={DetailModul}/>
          <Route path='/listkelas' component={ListKelas}/>
          <Route path='/admin' component={HomeAdmin}/>
          <Route path='/kelasku' component={Kelasku}/>
          <Route path='/dashboard/kelasku' component={Kelasku}/>
          <Route path='/dashboard/detaiilModul' component={DetailModul}/>
          <Route path='/dashboard/manageTransaksi' component={ManageTransaksi}/>
          <Route path='/dashboard/manageUser' component={ManageUser}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) =>{
  return{
    username    : auth.username,
    userId      : auth
  }
}
export default connect(mapStateToProps, {keepLogin, kelasInit, paketInit}) (App);
