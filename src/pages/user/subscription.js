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
        konfirmasidata:'',
        loading : false,
        belumBayar: false
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

        Axios.get(`${API_URL}/konfirmasi/getKonfirmasi`)
        .then((res)=>{
            console.log(res.data)
            this.setState({konfirmasiData: res.data})
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
                // this.setState({belumBayar: true})
                return (
                    <div className='verifikasiTransaksi'>
                        <center>
                            <h1>Kamu belum melakuakn konfirmasi pembayaran</h1>
                            <a href={`/payment?i=${val.idtransaction}`}>Klik disini</a>

                        </center>
                    </div>
                )
            } 
            // else{
            //     this.state.konfirmasidata.map((item)=>{
            //         if(val.userId === item.userId && item.status === 'unverified'){
            //             return(
            //             <div className='verifikasiTransaksi'>
            //                 <center>
            //                     <h1>menunggu proses verifikasi pembayaran</h1>
            //                 </center>
            //             </div>    
            //             )
            //         }
            //     })
            // }
        })
    }

    renderData=()=>{
        if(this.props.langganan){
            var awal = this.props.langganan.awalLangganan
            var akhir = this.props.langganan.akhirLangganan
            var sekarang = moment().format("YYYY-MM-DD h:mm:ss")
    
            var hasil = akhir - sekarang
            console.log(akhir)
            console.log(sekarang)
            console.log(hasil)
    
            return(
                <div>
                    <center>
                        <div className='box1'>
                            <h4>Paket Berlangganan Qelas anda saat ini</h4>
                            <h3>paket {this.props.langganan.durasi} Hari</h3>
                            <h3>Berakhir pada : <Moment format="YYYY/MM/DD">{akhir}</Moment></h3>
                            <h1> Waktu Tersisa <Moment date={akhir}durationFromNow unit='days'/></h1>
                            
                        </div>
                    </center>
                </div>
    
            )
        }

        // return this.state.transaksiData.map((val)=>{
        //     if(val.userId === this.props.userId && val.status === 'Unverified'){
        //         this.setState({belumBayar: true})
        //         return (
        //             <div className='verifikasiTransaksi'>
        //                 <center>
        //                     <h1>Kamu belum melakuakn konfirmasi pembayaran</h1>
        //                     <a href={`/payment?i=${val.idtransaction}`}>Klik disini</a>

        //                 </center>
        //             </div>
        //         )
        //     }
            // return(
            //     <center>
            //         <div className='box1'>
            //             <h4>Anda belum berlangganan paket apapun</h4>
            //             <a href='/subscribe' style={{textDecoration:'none'}}>
            //                 <h3>mulai berlangganan</h3>
            //             </a>
            //         </div>
            //     </center>
    
            // )
        // })
        
    }
   
    render(){
        console.log(this.state.transaksiData)
        console.log(this.props.idtransaksi)
        // console.log(this.props.selectedPaket)
        if(!this.state.transaksiData){
            return <Loading/>
        }
        // console.log(this.renderStatus)
        // if(this.state.belumBayar)
        // return(
        //     <section id='confirmPage'>
        //         <div className='container d-flex justify-content-center align-items-center flex-column flex-wrap'>
        //             <div className='confirm'>
        //                 {this.renderStatus()}
        //             </div>
        //         </div>
        //     </section>
        // )
        return(
            <section id='confirmPage'>
                <div className='container d-flex justify-content-center align-items-center flex-column flex-wrap'>
                    <div className='confirm'>
                        {this.renderStatus()}
                        {this.renderData()}
                    </div>
                </div>
            </section>
        )
    }
}

const mapsStateToProps = ({auth})=>{
    return{
        userId  : auth.userId,
        langganan : auth.langganan ? auth.langganan[0] : null
    }
}

export default connect(mapsStateToProps) (Subscription);