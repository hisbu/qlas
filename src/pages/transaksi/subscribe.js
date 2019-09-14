import React, {Component} from 'react'
import {Paper, TextField, MenuItem, makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import Loading from '../loadingPage'
import { BtnBgQcolor} from '../../component/btnQlas'
const numeral = require('numeral')

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

  


class SubscribePage extends Component{
    state={
        selectedPaket: '',
        paket:null
    }

    componentDidMount(){
        Axios.get(`${API_URL}/paket/getPaket`)
        .then((res)=>{
            console.log(res.data)
            console.log(res.data[0].kelasName)
            this.setState({paket: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderPaket=()=>{
        return this.state.paket.map((val)=>{
            return(
                <MenuItem key={val.durasi}  value={val}>{val.durasi} Hari - Rp. {numeral(val.harga).format('0,0')}</MenuItem>
            )
        })
    }

    handleChange = name => event => {
        console.log(event.target)
        this.setState({selectedPaket: event.target.value})
    // setValues({ ...values, [name]: event.target.value });
    };
    render(){
        if(!this.state.paket){
            return <Loading/>
        }
        const {textField, menu} = useStyles
        return(
            <div id='subSection' className='container'>
                <h2>Paket Langganan</h2>
                <h1>Dengan satu langganan, dapatkan akses semua kelas</h1>
                <p>Pilih masa belajar di Qelas Academy sesuai kebutuhanmu. Makin besar paket langganan pilihanmu, makin hemat investasimu</p>
                <Paper className='sub-Paper'>
                    <div className='row'>
                        <div className='col-7 leftSec '>
                            <TextField
                                id="category"
                                select
                                label="Pilih paket berlangganan"
                                className={textField}
                                value={this.state.selectedPaket}
                                onChange={this.handleChange()}
                                SelectProps={{
                                    MenuProps: {
                                        className: menu,
                                    },
                                }}
                                margin="normal"
                                fullWidth
                            >
                                {this.renderPaket()}
                            </TextField>
                            <ul style={{textAlign:'left', marginLeft:'1em'}}>
                                <li>Akses ke semua materi kelas di Qelas Academy</li>
                                <li>Bimbingan dan review kode dari para expert developer terhadap tugas submission Anda</li>
                                <li>Sertifikat kelulusan jika Anda berhasil menyelesaikan kelas berikut submission-nya dengan baik</li>
                            </ul>
                        </div>
                        <div className='col-5 d-flex align-items-center justify-content-center flex-wrap'>
                            {this.state.selectedPaket 
                            ?
                                <div>
                                    <h2>Rp. {numeral(this.state.selectedPaket.harga).format('0,0')}</h2>
                                    <h5>{this.state.selectedPaket.durasi} days</h5>
                                    <Link to='/payment?'  style={{ textDecoration: 'none' }}>
                                        <BtnBgQcolor title={'Berlangganan sekarang'}/>
                                    </Link>
                                </div>
                            :
                            null
                        }
                        <p className='mt-2' style={{fontSize:'12px'}}><i>*ketika anda menekan tombol berlangganan.<br/>maka anda akan diarahkan ke halaman detail dan cara pembayaran</i></p>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default SubscribePage