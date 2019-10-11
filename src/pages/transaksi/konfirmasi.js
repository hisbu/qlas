import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { Paper } from '@material-ui/core'
import {Redirect, Link} from 'react-router-dom'
import Loading from '../loadingPage'
// import queryString from 'query-string'
import Axios from 'axios'
import { transaction} from '../../redux/actions'
import { API_URL} from '../../helpers'
const numeral = require('numeral')

class confirmation extends Component{
    state = {
        paketData : '',
        transData: '',
        loading : false
    }
    componentDidMount(){
        window.scrollTo(0,0)
        // let url = queryString.parse(this.props.location.search)
    }

    onBayarBtnClick = () =>{
        
        this.setState({loading: true})

        var userId = this.props.userId
        var paketId = this.props.selectedPaket.idpaket
        var durasi = this.props.selectedPaket.durasi
        var harga = this.props.selectedPaket.harga
        var email = this.props.email

        if(userId){
            var formData = new FormData()
            const token = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                    // 'Content-Type': 'multipart/form-data'
                }
            }
            var data = {
                userId,
                paketId,
                durasi,
                harga,
                email
            }
            console.log(data)

            formData.append('data', JSON.stringify(data))

            // var a = JSON.stringify(data)
            console.log(formData.getAll)

            Axios.post(`${API_URL}/transaction/addTransaction`, data, headers)
            .then((res)=>{
                console.log(res.data)
                this.props.transaction(res.data[0])
                this.setState({loading: false, transData: res.data[0]})

            }).catch((err)=>{
                console.log(err)
            })
        }else{
            console.log('something wrong')
        }
    }
   
    render(){
        console.log(this.props.selectedPaket)
        if(!this.props.token){
            return (
                <section id='confirmPage'>
                    <div className='container d-flex justify-content-center align-items-center flex-column flex-wrap'>
                        <div className='confirm'>
                            <center>
                                <h2 style={{textAlign:'center'}}>Anda belum terdaftar</h2>
                                <br></br>
                                <div className='box1'>
                                    <h4>Harap melakuakn pendaftaran terlebih dahulu dengan menekan tombol daftar dibawah</h4>
                                    {/* <h3>{this.props.selectedPaket.durasi} Hari</h3>
                                    <h1> Rp. {numeral(this.props.selectedPaket.harga).format('0,0')}</h1>
                                    <span><i>*dengan menekan tombol lanjut pembayaran<br/> anda akan diarahkan ke halaman detail dan cara pembayaran</i></span> */}
                                </div>
                                {/* <Link to='/payment' style={{textDecoration:'none'}}> */}
                                    <Link to='/register' style={{textDecoration:'none'}}>
                                        <div className='bayar'>Daftar</div>
                                    </Link>
                                {/* </Link> */}
                            </center>
                        </div>
                        <div className='cancel'>
                            <p>sudah punya akun?  <a href='/login' style={{textDecoration:'none', color:'#858585'}}>Login</a></p>
                        </div>
                    </div>
                </section>
            )
        }
        if(this.state.transData){
            return (<Redirect to={`/payment?i=${this.state.transData.idtransaction}`}/>)
        }
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
                            {/* <Link to='/payment' style={{textDecoration:'none'}}> */}
                                <div className='bayar' onClick={this.onBayarBtnClick}>
                                    {this.state.loading ? 'loading....' : 'LANJUT PEMBAYARAN' }
                                </div>
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

const mapStateToProps = ({paket, auth})=>{
    return{
        token           : auth.token,
        paket           : paket.paket,
        selectedPaket   : paket.selectedPaket,
        userId          : auth.userId,
        email           : auth.email
    }
}

export default connect(mapStateToProps, {transaction}) (confirmation);