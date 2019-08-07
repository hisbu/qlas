import React, {Component} from 'react'
import NavBar from '../component/navBar'
import { BtnBgQcolor } from './../component/btnQlas'
import CardCatalogue from './../component/card'

// import image
import Listening from './../../src/supports/img/internet.png'
import Exam from './../../src/supports/img/trophy.png'
import Question from './../../src/supports/img/job-search.png'

class LandingPage extends Component{
    render(){
        return(
            <div className='landingPage'>
                <NavBar/>
                {/* ============= Start Jumbotron =============  */}
                <section className='lp_jumbotron d-flex kotak'>
                    <div className='container '>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 jb_content'>
                                <div className='jb_content_big'>
                                Bangun Karirmu <br/>Sebagai Developer Profesional
                                </div>
                                <div className='jb_content_small'>
                                Jadilah tuan rumah di negeri sendiri dengan belajar langsung dari para inovator dan developer expert
                                </div>
                                <div className='jb_btn'>
                                    <BtnBgQcolor title={'Daftar Gratis Sekarang'}/>
                                </div>
                            </div>
                        </div>
                        <a href="#sec_feature">
                        <div className='arrow_box'>
                            <div className='arrow_container '>
                                <div className='align-self-end' >
                                    <div class="container_arrow">
                                        <div class="chevron"></div>
                                        <div class="chevron"></div>
                                        <div class="chevron"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='arrow_title kotak'>scrol down</div> */}
                        </div>
                        </a>
                    </div>
                </section>
                {/* ============= Start Fitur ============= */}

                <section id='sec_feature'>
                   <div className='overlay_feature'>
                       <div className='container '>
                           <div className='row justify-content-center mtop '>
                               <div className='col-md-4 col-sm-12 mt-4' id='feature_item'>
                                   <div className='row d-flex'>
                                       <div className='col-12 '>
                                           <div className='feature_content text-center'>
                                                <img src={Listening} height='100px' alt='listening'/>
                                                <h3>Akses dimana saja</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className='col-md-4 col-sm-12 mt-4' id='feature_item'>
                                   <div className='row d-flex'>
                                       <div className='col-12 '>
                                           <div className='feature_content text-center'>
                                                <img src={Exam} height='100px' alt='exam'/>
                                                <h3>Akses dimana saja</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className='col-md-4 col-sm-12 mt-4' id='feature_item'>
                                   <div className='row d-flex'>
                                       <div className='col-12 '>
                                           <div className='feature_content text-center'>
                                                <img src={Question} height='100px' alt='question'/>
                                                <h3>Akses dimana saja</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                </section>

                {/* ============= Start Catalog =============  */}

                <section id='catalog'>
                    <div className='container'>
                        <div className='row mtop'>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <CardCatalogue/>
                            </div>
                        </div>
                    </div>
                </section>
                

            </div>
        )
    }
}

export default LandingPage;