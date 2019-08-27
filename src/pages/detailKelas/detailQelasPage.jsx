import React, {Component} from 'react'
import { connect} from 'react-redux'
import {pagePosition } from './../../redux/actions'
import {Paper} from '@material-ui/core'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap'
import classnames from 'classnames'
import './style.css'
import image4 from './../../supports/img/carousel/img4.jpg'
import desktop from './../../supports/img/desktop.png'

class DetailQelas extends Component{
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
        console.log(position)
      }
    render(){
        return(
            <div id='detailPage' className=' detailPage'>
                <div className='bg_detail'>
                    <img src={image4}/>
                </div>`
                <Paper className='paperDetail' >
                    <div className='kelas_pic'>
                        <img src={desktop} width='15%'/>
                        <p className='title_small'>Disusun Oleh : Ahmad Hisbullah</p>
                        <p className='title_kelas'>Membuat Singla Page Application dengan React</p>
                        <p className='title_small'>Level: Pemula    |    Platfrom: Website</p>
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
                                <Col sm="12 mt-3">
                                    <center>

                                    <h4>Mari belajar Progressive Web App, website kekinian dengan </h4><h4> fungsionalitas seperti desktop / mobile App!</h4>
                                    </center>
                                    <p>
                                    Progressive Web Apps menyajikan pengalaman pengguna layaknya aplikasi native. PWA merupakan aplikasi web dengan beragam fitur web modern, seperti: 

Mengubah sajian tampilan yang umumnya dibuka melalui halaman browser menjadi jendela aplikasi tersendiri.

Menyajikan aplikasi web yang dapat diandalkan, cepat, dan menjaga ikatan dengan pengguna.

Memungkinkan konten halaman diakses dalam mode offline, menampilkan pesan pemberitahuan, hingga akses ke hardware dari perangkat seperti halnya native app.

Banyak perusahaan telah mengadopsi PWA. Developer dengan skill PWA lebih dilirik oleh perusahaan. 



Beberapa keuntungan belajar di kelas ini:
Sertifikat kelulusan kelas MPWA, diakui oleh para pelaku industri.

Materi kelas ditulis tim expert developer dari Codepolitan.

Di sini Anda belajar dengan didampingi expert reviewer yang membaca baris demi baris kode Anda. Reviewer akan membimbing dan memberi masukan pada project submission. Anda pun jadi tahu area mana dalam skill PWA Anda yang perlu ditingkatkan.

Anda bisa belajar dengan fleksibel karena sepenuhnya online/daring tanpa tatap muka. Bisa belajar di mana pun dan kapan pun.

Anda bisa belajar dengan kecepatan Anda sendiri dalam tempo pengerjaan kelas selama 50 hari, maksimal.

Untuk mendampingi Anda belajar offline, Anda mendapatkan buku setebal 308 halaman, versi cetak dari materi online.

Sebagai lulusan Dicoding Academy Anda berkesempatan memperoleh info lowongan pekerjaan dan kesempatan melamar kerja ke perusahaan via Dicoding Jobs.



Beberapa materi yang akan dipelajari di dalam kelas ini adalah:
Promises and fetch, yaitu dua web API modern yang dapat kita gunakan untuk menulis blok kode dengan lebih mudah dan intuitif.
Service worker, yaitu JavaScript yang dijalankan oleh browser di latar belakang, yang terpisah dengan skrip lain di halaman web browser. Dengan menggunakan service worker, kita dapat memanfaatkan resource yang telah disimpan di dalam cache untuk ditampilkan bahkan dalam mode jaringan offline.
Application shell, atau biasa disingkat dengan app shell adalah kerangka antarmuka aplikasi yang dibangun oleh beberapa komponen halaman dan aset lainnya yang disimpan lebih dahulu di dalam cache sehingga dapat tampil secara instan saat aplikasi dibuka.
Cache API, yaitu cache yang dibuat oleh aplikasi menggunakan Cache API dan terpisah dari cache yang dikelola oleh browser. Cache jenis inilah yang dapat kita gunakan untuk menyimpan resource dan dapat ditampilkan dalam mode jaringan offline melalui service worker.
Indexed DB, yaitu sistem penyimpanan lokal berbasis NoSQL di browser. Kita dapat menyimpan data apapun di browser pengguna untuk keperluan aplikasi. Kamu dapat melakukan aksi pencarian, pembaharuan dan penghapusan data.
Web Push, yaitu web API yang dapat menerima pesan pemberitahuan dari server di belakang layar. Web push dapat dikombinasikan dengan sistem notifikasi yaitu pesan popup yang muncul di perangkat pengguna. Aplikasi PWA dapat menerima event push dan menampilkan pesan popup meskipun pengguna sedang tidak membuka aplikasi tersebut.
Workbox, yaitu koleksi librari dan tool yang dapat kita gunakan untuk meng-generate file service worker, precaching, routing dan runtime-caching. Workbox memudahkan kita dalam menulis kode PWA dengan sintaks yang lebih sederhana dan mudah dikelola.
Serta 3 tugas berbasis proyek yang akan menantang Anda untuk membangun PWA Anda sendiri.
                                    </p>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
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
                                </Row>
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
        position: state.page
    }
}

export default connect(mapStateToProps, {pagePosition}) (DetailQelas);