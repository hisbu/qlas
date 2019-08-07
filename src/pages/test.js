import React, {Component} from 'react';
import Carousel from './../component/carouselUserDashboard'
class test extends Component{
  render(){
    return(
      <div className='container bg-secondary'>
        <div className='col-10'>
        <Carousel/>
        </div>
      </div>
    )
  }
}

export default test;
