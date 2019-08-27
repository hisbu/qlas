import React, {Component} from 'react'
import { connect} from 'react-redux'
import { pagePosition} from './../../redux/actions'
import './style.css'
import Logo from '../../supports/img/logo1.png'
import TopMenu from '../../component/topMenu'

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
          {/* <div className='row '> */}
            <div className='sideMenu '>
              <div className='logo mt-4'>
                <img src={Logo} height='40px' alt='qlas logo' />
              </div>
            </div>
            <div className='contentContainer '>
              <div className='header'>
                {/* <div className='right-menu'> */}
                  <TopMenu/>
                {/* </div> */}
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
              </div>
            </div>

          {/* </div> */}
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