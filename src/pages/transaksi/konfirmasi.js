import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Paper } from '@material-ui/core'
import Loading from '../loadingPage'
import queryString from 'query-string'
const numeral = require('numeral')

class confirmation extends Component{
    state = {
        paketData : ''
    }
    componentDidMount(){
        let url = queryString.parse(this.props.location.search)
    }

   
    render(){
        return(
            <section id='confirmPage'>
                <div className='container d-flex justify-content-center align-items-center flex-column flex-wrap'>
                    <div className='confirm'>
                        <center>
                            <h2 style={{textAlign:'center'}}>Konfirmasi Pesanan</h2>
                            <br></br>
                            <div className='box1'>
                                <h4>Paket Berlangganan Qelas</h4>
                                <h3>{this.props.selectedPaket.durasi} Hari</h3>
                                <h1> Rp. {numeral(this.props.selectedPaket.harga).format('0,0')}</h1>
                                <span><i>*dengan menekan tombol lanjut pembayaran<br/> anda akan diarahkan ke halaman detail dan cara pembayaran</i></span>
                            </div>
                            <div className='bayar'>
                                LANJUT PEMBAYARAN
                            </div>
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

const mapStateToProps = ({paket})=>{
    return{
        paket: paket.paket,
        selectedPaket: paket.selectedPaket
    }
}

export default connect(mapStateToProps) (confirmation);