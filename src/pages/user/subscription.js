import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { Paper } from '@material-ui/core'
// import {Link, Redirect} from 'react-router-dom'
import Loading from '../loadingPage'
// import queryString from 'query-string'
// import { transaction} from '../../redux/actions'
import Moment from 'react-moment'
import { API_URL} from '../../helpers'
import moment from 'moment'
import Axios from 'axios'
import Payment from '../transaksi/payment'
import { Link } from '@material-ui/core'

// const numeral = require('numeral')
var now = moment().format("YYYY-MM-DD h:mm:ss")

class Subscription extends Component{
    state = {
        subscriptionData : '',
        transaksiData : '',
        loading : false
    }

    componentDidMount(){
        // let url = queryString.parse(this.props.location.search)
        const token = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                    // 'Content-Type': 'multipart/form-data'
                }
            }
        Axios.get(`${API_URL}/transaction/getTransaction`)
        .then((res)=>{
            console.log(res.data)
            this.setState({transaksiData: res.data})
        }).catch((err)=>{
            console.log(err)
        })

        Axios.get(`${API_URL}/langganan/getLangganan?userId=${this.props.userId}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({subscriptionData: res.data[0]})
        })
    }

    componentDidUpdate(){
        console.log(this.state.subscriptionData.awalLangganan)
        console.log(this.state.subscriptionData.akhirLangganan)
    }

    renderStatus=()=>{
        return this.state.transaksiData.map((val)=>{
            if(val.userId === this.props.userId && val.status === 'Unverified'){
                return (
                    <div className='verifikasiTransaksi'>
                        <center>
                            <h1>Kamu belum melakuakn konfirmasi pembayaran</h1>
                            <a href={`/payment?i=${val.idtransaction}`}>Klik disini</a>

                        </center>
                    </div>
                )
            }
        })
    }

    renderData=()=>{
        var awal = this.props.langganan.awalLangganan
        var akhir = this.props.langganan.akhirLangganan
        var sekarang = moment().format("YYYY-MM-DD h:mm:ss")

        var hasil = akhir - sekarang
        console.log(akhir)
        console.log(sekarang)
        console.log(hasil)

        return(
            <div>
                {/* <h1>Saat ini anda sedang berlangganan pake {this.props.langganan.durasi}</h1>
                <p>Periode langganan</p>
                <p>Mulai = <Moment format="YYYY/MM/DD">{awal}</Moment></p>
                <p>berakhir pada = <Moment format="YYYY/MM/DD">{akhir}</Moment></p>
                waktu tersisa = <Moment date={akhir}durationFromNow unit='days'/> */}
                <center>
                    {/* <h2 style={{textAlign:'center'}}>Konfirmasi Pesanan</h2> */}
                    {/* <br></br> */}
                    <div className='box1'>
                        <h4>Paket Berlangganan Qelas anda saat ini</h4>
                        <h3>paket {this.props.langganan.durasi} Hari</h3>
                        <h3>Berakhir pada : <Moment format="YYYY/MM/DD">{akhir}</Moment></h3>
                        <h1> Waktu Tersisa <Moment date={akhir}durationFromNow unit='days'/></h1>
                        
                    </div>
                    {/* <Link to='/payment' style={{textDecoration:'none'}}> */}
                        {/* <div className='bayar' onClick={this.onBayarBtnClick}>
                            {this.state.loading ? 'loading....' : 'LANJUT PEMBAYARAN' }
                        </div> */}
                    {/* </Link> */}
                </center>
            </div>

        )
    }
   
    render(){
        console.log(this.state.transaksiData)
        console.log(this.props.idtransaksi)
        // console.log(this.props.selectedPaket)
        if(!this.state.transaksiData){
            return <Loading/>
        }
        return(
            <section id='confirmPage'>
                <div className='container d-flex justify-content-center align-items-center flex-column flex-wrap'>
                    <div className='confirm'>
                        {this.renderData()}
                        {this.renderStatus()}
                        <center>
                            {/* <h2 style={{textAlign:'center'}}>Konfirmasi Pesanan</h2>
                            <br></br>
                            <div className='box1'>
                                <h4>Paket Berlangganan Qelas</h4>
                                <h3>{this.props.selectedPaket.durasi} Hari</h3>
                                <h1> Rp. {numeral(this.props.selectedPaket.harga).format('0,0')}</h1>
                                <span><i>*dengan menekan tombol lanjut pembayaran<br/> anda akan diarahkan ke halaman detail dan cara pembayaran</i></span>
                            </div> */}
                            {/* <Link to='/payment' style={{textDecoration:'none'}}> */}
                                {/* <div className='bayar' onClick={this.onBayarBtnClick}>
                                    {this.state.loading ? 'loading....' : 'LANJUT PEMBAYARAN' }
                                </div> */}
                            {/* </Link> */}
                        </center>
                    </div>
                    {/* <div className='cancel'>
                        <span><a href='/' style={{textDecoration:'none', color:'#858585'}}>Batalkan Pesanan</a></span>
                    </div> */}
                </div>
            </section>
        )
    }
}

const mapsStateToProps = ({auth})=>{
    return{
        userId  : auth.userId,
        langganan : auth.langganan[0]
    }
}

export default connect(mapsStateToProps) (Subscription);