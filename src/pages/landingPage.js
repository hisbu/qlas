import React, {Component} from 'react'
import NavBar from '../component/navBar'
import { BtnBgQcolor } from './../component/btnQlas'
import CardCatalogue from './../component/card'

// import image
import Listening from './../../src/supports/img/internet.png'
import Exam from './../../src/supports/img/trophy.png'
import Question from './../../src/supports/img/job-search.png'
import Catalog from '../supports/img/programmer.png'
// import Testimoni from './../supports/img/testimonyhome.jpg'
class LandingPage extends Component{
    state={
        pageLocation: 'landing'
    }
    render(){
        return(
            <div className='landingPage'>
                {/* <NavBar/> */}
                {/* ============= Start Jumbotron =============  */}
                <section className='lp_jumbotron d-flex '>
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
                           <div className='row justify-content-center mtop mbottom'>
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
                                                <h3>Tingkatkan Kemampuan</h3>
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
                                                <h3>Konsultasi dengan ahli</h3>
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
                        <div className='row justify-content-center col-12 mtop'>
                            <div className='feature_title_big'>
                                Belajar Online di QELAS
                            </div>
                            <div className='feature_title_small'>
                                Platform E-learning yang menyediakan beragam kelas untuk meningkatkan kompetensi serta daya saing di dunia kerja.
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-4 d-flex vertCenter img-fluid catalogue_img'>
                                <img src={Catalog} alt='catalog' width='300px'/>
                            </div>
                            <div className='col-md-8 col-sm-12 '>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-md-6 mt-4 '>
                                        <CardCatalogue/>
                                    </div>
                                    <div className='col-md-6 mt-4 '>
                                        <CardCatalogue/>
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                        <CardCatalogue/>
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                        <CardCatalogue/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <center className='mbottom mt-5'><BtnBgQcolor title={'Lihat kelas lengkap'}/></center>
                    </div>
                </section>


                {/*  ============= Start Testimoni ============= */}
                <section id='sec_testimoni'>
                    <div className='testimoni_bg'>
                        {/* <img src={Testimoni} width='100%' alt='testimoni'/> */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='testimoni_content_big'>
                                        "Aksesnya yang mudah membuat saya selalu
                                        <br/>menyempatkan diri untuk belajar di saat perjalanan
                                        <br/>berangkat maupun pulang kantor."
                                    </div>
                                    <div className='testimoni_content_small'>
                                        Chris, Software Engineer
                                    </div>
                                    <BtnBgQcolor title={'Daftar Gratis'} className='mbottom'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/*  ============= Start Footer ============= */}
                <section id='sec_footer'>
                    <div className='footer_bg '>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='footer_title'>Perusahaan</div>
                                    <li>Tentang Kami</li>
                                    <li>Kesempatan Karir</li>
                                </div>
                                <div className='col-3'>
                                    <div className='footer_title'>Produk</div>
                                    <li>Kelas Premium</li>
                                    <li>Kelas Gratis</li>
                                </div>
                                <div className='col-3'>
                                    <div className='footer_title'>Bantuan</div>
                                    <li>hubungi Kami</li>
                                    <li>Kesempatan Karir</li>
                                </div>
                                <div className='col-3'>Sosmed</div>
                            </div>
                            <center><div className='mt-5'>@2019 PT Indonesia Pintar Bersama. All Rights Reserver.</div></center>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default LandingPage;