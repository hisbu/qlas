import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Paper } from '@material-ui/core'
import {Link, Redirect} from 'react-router-dom'
import Loading from '../loadingPage'
import queryString from 'query-string'
import { transaction} from '../../redux/actions'
import { API_URL} from '../../helpers'
import moment from 'moment'
import Axios from 'axios'

const numeral = require('numeral')
var now = moment().format("YYYY-MM-DD h:mm:ss")

class Subscription extends Component{
    state = {
        subscriptionData : '',
        loading : false
    }

    componentDidMount(){
        let url = queryString.parse(this.props.location.search)

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

    renderData=()=>{
        var awal = this.state.subscriptionData.awalLangganan
        var akhir = this.state.subscriptionData.akhirLangganan
        var sekarang = moment().format("YYYY-MM-DD h:mm:ss")

        var hasil = moment.duration(2, 'days')


        return(
            <div>
                <p>disini</p>
                <h3>{this.state.subscriptionData.awalLangganan}</h3>
                <h2>{this.state.subscriptionData.akhirLangganan}</h2>
                <h2>{now}</h2>

                <h1>{hasil}</h1>
            </div>

        )
    }
   
    render(){
        console.log(this.props.userId)
        // console.log(this.props.selectedPaket)
        if(!this.state.subscriptionData){
            return <Loading/>
        }
        return(
            <section id='confirmPage'>
                <div className='container d-flex justify-content-center align-items-center flex-column flex-wrap'>
                    <div className='confirm'>
                        {this.renderData()}
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
                    <div className='cancel'>
                        <span><a href='/' style={{textDecoration:'none', color:'#858585'}}>Batalkan Pesanan</a></span>
                    </div>
                </div>
            </section>
        )
    }
}

const mapsStateToProps = ({auth})=>{
    return{
        userId  : auth.id
    }
}

export default connect(mapsStateToProps) (Subscription);