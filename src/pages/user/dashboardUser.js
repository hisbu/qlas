import React, {Component} from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect} from 'react-redux'
import { pagePosition} from './../../redux/actions'
import './style.css'
import TestPage from './../../pages/test'
import HomeUser from './homeUser'
import LoadingPage from './../loadingPage'
import ProfilePage from './profile'
import Subscription from './subscription'
import ListKelas from '../kelasNmodule/listKelas'
import ManageKelas from '../kelasNmodule/manageKelas'
import ManageModul from '../kelasNmodule/manageModul'
import ManageKonfirmasi from '../Admin/manageKonfirmasi'
import DetailModul from '../materi/detailModul'
import Kelasku from './kelasKu'
import ManageTransaksi from '../Admin/manageTransaksi'
import ManageUser from '../Admin/manageUser'

class DashboardUser extends Component{

  componentDidMount(){
    var position = window.location.href.split('/')[3]
    this.props.pagePosition(position)
    console.log(position)
    console.log(this.props.authChecked)
    console.log(this.props.roleId)
  }

  render(){
    if(this.props.token !== '' && this.props.authChecked){
      return(
        <div style={{backgroundColor:'#fff'}}>
          <div className='dashboardUser'>
            <div className='row'>
              {/* ============ START SIDE MENU ============ */}
              <div className='sideMenu  col-2 '>
                <div className='sideMenuItem'>
                  <Link to='/dashboard'><span>Home</span></Link>
                  <Link to='/dashboard/subscription'><span>Subscription</span></Link>
                  <Link to='/dashboard/listkelas'><span>Daftar Kelas</span></Link>
                  <Link to='/dashboard/kelasku'><span>Kelas Ku</span></Link>
                  { this.props.roleId != 3 ?
                  <section>
                  {/* {document.getElementsByClassName('sideMenu').style.backgroundColor='red'} */}
                    <Link to='/dashboard/manageKelas'><span>Manage Kelas</span></Link>
                    <Link to='/dashboard/manageModul'><span>Manage Modul</span></Link>
                    <Link to='/dashboard/manageTransaksi'><span>Manage Transaksi</span></Link>
                    <Link to='/dashboard/manageKonfirmasi'><span>Manage Konfirmasi Pembayaran</span></Link>
                    <Link to='/dashboard/manageUser'><span>Manage User</span></Link>
                  </section> 
                  : null }
                </div>
              </div>
              {/* ============ START CONTENT CONTAINER ============ */}
              <div className='contentContainer col-10 '>
                <div className='contentSection '>
                    <Route path='/dashboard' component={HomeUser} exact/>
                    <Route path='/dashboard/test' component={TestPage}/>
                    <Route path='/dashboard/profilePage' component={ProfilePage}/>
                    <Route path='/dashboard/subscription' component={Subscription}/>
                    <Route path='/dashboard/listkelas' component={ListKelas}/>
                    <Route path='/dashboard/manageKelas' component={ManageKelas}/>
                    <Route path='/dashboard/manageModul' component={ManageModul}/>
                    <Route path='/dashboard/manageKonfirmasi' component={ManageKonfirmasi}/>
                    <Route path='/dashboard/kelasku' component={Kelasku}/>
                    <Route path='/dashboard/detailModul' component={DetailModul}/>
                    <Route path='/dashboard/manageTransaksi' component={ManageTransaksi}/>
                    <Route path='/dashboard/manageUser' component={ManageUser}/>
                </div>  
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if(!this.props.authChecked && this.props.token === '') {
        return <LoadingPage/>
    }
    return <LoadingPage/>
  }
}

const mapStateToProps = (state)=>{
  return {
      position    : state.page,
      token       : state.auth.token, 
      authChecked : state.auth.authChecked,
      roleId      : state.auth.roleId
  }
}

export default connect(mapStateToProps, {pagePosition}) (DashboardUser);