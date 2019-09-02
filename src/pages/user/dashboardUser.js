import React, {Component} from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect} from 'react-redux'
import { pagePosition} from './../../redux/actions'
import './style.css'
import Logo from '../../supports/img/logo1.png'
import TopMenu from '../../component/topMenu'
import TestPage from './../../pages/test'
import Carousel from './../../component/carouselUserDashboard'
import HomeUser from './homeUser'

class DashboardUser extends Component{

  componentDidMount(){
    var position = window.location.href.split('/')[3]
    this.props.pagePosition(position)
    console.log(position)
  }

  render(){
    if(this.props.token !== ''){
      return(
        <div style={{backgroundColor:'#fff'}}>
          <div className='dashboardUser'>
            <div className='row'>
              {/* ============ START SIDE MENU ============ */}
              <div className='sideMenu  col-2 '>
                <div className='sideMenuItem'>
                  <Link to='/dashboard'><span>Home</span></Link>
                  <Link to='/dashboard/test'><span>ke test page</span></Link>
                </div>
              </div>
              {/* ============ START CONTENT CONTAINER ============ */}
              <div className='contentContainer col-10 '>
                <div className='contentSection '>
                    <Route path='/dashboard' component={HomeUser} exact/>
                    <Route path='/dashboard/test' component={TestPage}/>
                </div>  
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if(this.props.authChecked && this.props.token === '') {
        return <Redirect to="/login" />
    }
    return <center><h2>Loading.....</h2></center>
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