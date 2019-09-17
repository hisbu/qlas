import React, {Component} from 'react'
import { connect} from 'react-redux'
import {pagePosition } from '../../redux/actions'
import {Paper} from '@material-ui/core'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import classnames from 'classnames'
import { Redirect, Link } from 'react-router-dom'
import './style.css'
// import image4 from './../../supports/img/carousel/img4.jpg'
import desktop from './../../supports/img/desktop.png'
import MateriPage from '../materi/materiPage'
import queryString from 'query-string'
// import _ from 'lodash'
import Axios from 'axios'
import {API_URL} from '../../helpers'
import LoadingPage from '../loadingPage'

class DetailQelas extends Component{
    state = {
        kelasDetail:'',
        langganan:'',
        userId :this.props.userId
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        const token     = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }


        var position = window.location.href.split('/')[3]
        this.props.pagePosition(position)

        let url = queryString.parse(this.props.location.search)
        console.log(url)
        Axios.get(`${API_URL}/kelas/getKelas?idKelas=${url.id}`)
        .then((res)=>{
            console.log(res.data)
            console.log(res.data[0].kelasName)
            this.setState({kelasDetail: res.data[0]})
        }).catch((err)=>{
            console.log(err)
        })

        Axios.get(`${API_URL}/langganan/getLangganan`, headers)
        .then((res)=>{
            console.log(res.data)
            console.log(this.props.userId)
            res.data.map((val)=>{
                if(val.userId === this.props.userId && val.status ==='active'){
                    console.log('ketemu')
                    this.setState({langganan: val})
                }
            })
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    
    componentDidUpdate(){
        console.log(this.state.kelasDetail)
        console.log(this.state.langganan)
        
    }

    onAmbilKelasClick = ()=>{
        let url = queryString.parse(this.props.location.search)
        const token     = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        let data = {
            kelasId : url.id,
            userId : this.props.userId
        }

        Axios.post(`${API_URL}/kelasku/addKelasku`, data, headers)
        .then((res)=>{
            // console.log(res.data)
        })
    }
    
    renderBuybutton=()=>{
        let url = queryString.parse(this.props.location.search)
        if(this.props.langganan){
            let kelasku = ''
            if(this.props.kelasKu){
                this.props.kelasKu.map((val)=>{
                    console.log(val.kelasId === parseInt(url.id))
                    if(val.kelasId === parseInt(url.id)){
                        kelasku = 'taken'
                    }
                })
            }
            if(kelasku){
                return (
                    <section id='sectionBuy' className='sectionBuy'>
                        <div className='contentBuySection'> Anda sudah mengambil kelas ini, silahkan lanjutkan belajar</div>
                        <Link to={`/detailModul?kelasId=${url.id}`} style={{ textDecoration: 'none' }}>
                            <div className='buyBotton'>Lanjut Belajar</div>
                        </Link>
                    </section>
                )    
            }
            return (
                <section id='sectionBuy' className='sectionBuy'>
                    <div className='contentBuySection'> Saat ini anda sedang berlangganan paket, silahkan klik ambil kelas untuk mulai belajar</div>
                    <div className='buyBotton' onClick={this.onAmbilKelasClick}>Ambil kelas ini</div>
                </section>
            )
        }
        return (
            <section id='sectionBuy' className='sectionBuy'>
                <div className='contentBuySection'>Anda belum dapat mempelajari kelas ini. Yuk berlangganan sekarang agar bisa belajar di Kelas ini dan juga Materi Qelas Academy lainnya.</div>
                <Link to='/subscribe' style={{ textDecoration: 'none' }}>
                    <div className='buyBotton'>Berlangganan Sekarang</div>
                </Link>
            </section>
        )
        
        
    }
    render(){
        console.log(this.props.userId)
        if(!this.state.kelasDetail){
            return <LoadingPage/>
        }
        
        console.log(this.props.kelas)
        return(
            <div id='detailPage' className=' detailPage'>
                <div className='bg_detail'>
                    <img src={`${API_URL}${this.state.kelasDetail.image}`} alt='4a' width='100%'/>
                </div>`
                <Paper className='paperDetail mb-4' >
                    
                    <div className='kelas_pic'>
                        <img src={desktop} width='15%' alt='4b'/>
                        <p className='title_small'>Disusun Oleh : {this.state.kelasDetail.penyusun}</p>
                        {/* <h1>{this.state.kelasDetail}</h1> */}
                        <p className='title_kelas'>{this.state.kelasDetail.kelasName}</p>
                        <p className='title_small'>Level: {this.state.kelasDetail.level}    |    Platfrom: {this.state.kelasDetail.category}</p>
                    </div>
                    <div className='container mt-5'>
                        <div>
                            <Nav tabs>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }} >
                                Informasi Kelas
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }} >
                                Materi
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }} >
                                Quiz
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }} >
                                Konsultasi
                                </NavLink>
                            </NavItem>
                            </Nav>
                            {/* ================== tabcontent ================== */}
                            <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                <Col sm="9 mt-3">
                                    <div id='kelasDesc'>
                                        <div dangerouslySetInnerHTML={{ __html: this.state.kelasDetail.description }} />
                                    </div>
                                </Col>
                                <Col sm="3 mt-3">
                                    {this.renderBuybutton()}
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <MateriPage idKelas={this.state.kelasDetail.idKelas} langgalan='mana'/>
                            </TabPane>
                            <TabPane tabId="3">
                                <h2>tab 3</h2>
                            </TabPane>
                            <TabPane tabId="4">
                                <h2>tab 4</h2>
                            </TabPane>
                            </TabContent>
                        </div>
                    </div>
                    
                    
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        position    : state.page,
        kelas       : state.kelas.kelasData,
        userId      : state.auth.userId,
        langganan   : state.auth.langganan,
        kelasKu     : state.auth.kelasku
    }
}

export default connect(mapStateToProps, {pagePosition}) (DetailQelas);