import React, {Component} from 'react'
import NavBar from '../component/navBar'
import bg1 from './../supports/img/5.png'

class LandingPage extends Component{
    render(){
        return(
            <div className='landingPage'>
                <NavBar/>
                <div className='lp_jumbotron '>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 kotak'>
                                <div className='jb_content_big'>
                                Tingkatkan Kemampuan<br></br>dan Kompetensi Diri
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={bg1} alt='background1' width='100%' style={{marginTop:'-30px', position:'relative',zIndex:'1'}}/> */}
            </div>
        )
    }
}

export default LandingPage;