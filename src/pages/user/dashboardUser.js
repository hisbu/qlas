import React, {Component} from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect} from 'react-redux'
import { pagePosition} from './../../redux/actions'
import './style.css'
// import Logo from '../../supports/img/logo1.png'
// import TopMenu from '../../component/topMenu'
import TestPage from './../../pages/test'
// import Carousel from './../../component/carouselUserDashboard'
import HomeUser from './homeUser'
import LoadingPage from './../loadingPage'
import ProfilePage from './profile'
import Subscription from './subscription'

class DashboardUser extends Component{

  componentDidMount(){
    var position = window.location.href.split('/')[3]
    this.props.pagePosition(position)
    console.log(position)
    console.log(this.props.authChecked)
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
                </div>
              </div>
              {/* ============ START CONTENT CONTAINER ============ */}
              <div className='contentContainer col-10 '>
                <div className='contentSection '>
                    <Route path='/dashboard' component={HomeUser} exact/>
                    <Route path='/dashboard/test' component={TestPage}/>
                    <Route path='/dashboard/profilePage' component={ProfilePage}/>
                    <Route path='/dashboard/subscription' component={Subscription}/>
                </div>  
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if(!this.props.authChecked && this.props.token === '') {
        return <Redirect to="/" />
    }
    return <LoadingPage/>
  }
}

const mapStateToProps = (state)=>{
  return {
      position    : state.page,
      token       : state.auth.token, 
      authChecked : state.auth.authChecked
  }
}

export default connect(mapStateToProps, {pagePosition}) (DashboardUser);