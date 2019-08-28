import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { pagePosition} from './../../redux/actions'
import './style.css'
import Logo from '../../supports/img/logo1.png'
import TopMenu from '../../component/topMenu'
import TestPage from './../../pages/test'
class DashboardUser extends Component{

  componentDidMount(){
    var position = window.location.href.split('/')[3]
    this.props.pagePosition(position)
    console.log(position)
  }

  render(){
    return(
      <div style={{backgroundColor:'#fff'}}>
        <div className='dashboardUser'>
         
            <div className='sideMenu '>
              <div className='sideMenuItem'>
                <Link to='/dashboard'><span>Home</span></Link>
                <Link to='/dashboard/test'><span>ke test page</span></Link>
              </div>
            </div>
            <div className='contentContainer '>
              <div className='contentSection '>
                
               
              
                <Route path='/dashboard/test' component={TestPage}/>
              
               
              </div>
            </div>

         
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
      position: state.page
  }
}

export default connect(mapStateToProps, {pagePosition}) (DashboardUser);