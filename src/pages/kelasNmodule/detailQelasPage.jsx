import React, {Component} from 'react'
import { connect} from 'react-redux'
import {pagePosition } from '../../redux/actions'
import {Paper} from '@material-ui/core'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import classnames from 'classnames'
import { Link} from 'react-router-dom'
import './style.css'
import image4 from './../../supports/img/carousel/img4.jpg'
import desktop from './../../supports/img/desktop.png'
import MateriPage from '../materi/materiPage'
import queryString from 'query-string'
import _ from 'lodash'
import Axios from 'axios'
import {API_URL} from '../../helpers'

class DetailQelas extends Component{
    state = {
        kelasDetail:''
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
        var position = window.location.href.split('/')[3]
        this.props.pagePosition(position)
        let url = queryString.parse(this.props.location.search)
        Axios.get(`${API_URL}/kelas/getKelas?idKelas=${url.id}`)
        .then((res)=>{
            console.log(res.data)
            console.log(res.data[0].kelasName)
            this.setState({kelasDetail: res.data[0]})
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    
    componentDidUpdate(){
        console.log(this.state.kelasDetail)
        
    }
    render(){
        if(!this.state.kelasDetail){
            return <h2>loading.....</h2>
        }
        console.log(this.props.kelas)
        return(
            <div id='detailPage' className=' detailPage'>
                <div className='bg_detail'>
                    <img src={`${API_URL}${this.state.kelasDetail.image}`} alt='4a'/>
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
                                    <section id='sectionBuy' className='sectionBuy'>
                                        <div className='contentBuySection'>Anda belum dapat mempelajari kelas ini. Yuk berlangganan sekarang agar bisa belajar di Kelas ini dan juga Materi Qelas Academy lainnya.</div>
                                        <Link to='/subscribe' style={{ textDecoration: 'none' }}>
                                            <div className='buyBotton'>Berlangganan Sekarang</div>
                                        </Link>
                                    </section>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                {/* <Row>
                                <Col sm="6">
                                    <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                </Row> */}
                                <MateriPage/>
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
        kelas       : state.kelas.kelasData
    }
}

export default connect(mapStateToProps, {pagePosition}) (DetailQelas);