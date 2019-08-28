import React, {Component} from 'react'
import Logo from '../../supports/img/logo1.png'
import TopMenu from '../../component/topMenu'
import Carousel from './../../component/carouselUserDashboard'

class HomeUser extends Component{
    render(){
        return(
            <div className='container kotak'>
                  <div className='row'>
                    <div className='col-9'>
                      <Carousel/>
                    </div>

                    <div className='col-3 rightContent'>
                        <h6>Rekomendasi Kelas</h6>

                        <div className='rekomendasiContainer'>
                          <div className='rekomendasiImage'>
                            <img src={"https://www.xda-developers.com/files/2019/06/sale_18785_primary_image.jpg"}/>
                          </div>
                          <div className='recomendasiDetail'>
                              <p className='rekomendasiTitle'>
                                Pemrograman Phyton untuk pemula
                              </p>
                              <p className='rekomendasiContent'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                          </div>
                        </div>

                        <div className='rekomendasiContainer'>
                          <div className='rekomendasiImage'>
                            <img src={"https://www.xda-developers.com/files/2019/06/sale_18785_primary_image.jpg"}/>
                          </div>
                          <div className='recomendasiDetail'>
                              <p className='rekomendasiTitle'>
                                Pemrograman Phyton untuk pemula
                              </p>
                              <p className='rekomendasiContent'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
               
              
                
              
               
              
        )
    }
}

export default HomeUser;