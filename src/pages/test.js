import React, {Component} from 'react';
import Carousel from './../component/carouselUserDashboard'
class test extends Component{
  render(){
    return(
      <div className='container bg-secondary'>
        <div className='col-6'>
          {/* <Carousel/> */}
        <h1>test page</h1>
        <div className='boks'></div>
               <div className='boks' style={{borderRadius:'18px'}}></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
               <div className='boks'></div>
        </div>
      </div>
    )
  }
}

export default test;

