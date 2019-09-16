import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import './transaksiStyle.css'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import Bca from '../../supports/img/BCA_logo.svg'
import Mandiri from '../../supports/img/Bank_Mandiri_logo.svg'
import { 
    makeStyles,
    Button, TextField , Dialog, DialogActions, DialogContent, DialogTitle, Slide, MenuItem,
    FormLabel, RadioGroup, FormControlLabel, Radio, DialogContentText
    } from '@material-ui/core'
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import { CustomInput, Spinner, FormGroup, Label, Input } from 'reactstrap'
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns'
import { connect } from 'react-redux'
import queryString from 'query-string'
import LoadingPage from '../loadingPage'
import moment from 'moment'
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

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const TransitionTerima = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


class Payment extends Component{
    state = {
        open                : false,
        openTerima          : false,
        addImageFileName    : 'Upload Bukti Bayar...', 
        addImageFile        : undefined, 
        selectedDate        : new Date('2014-08-18'),
        transData           :'',
        bank                :'',
        loading             : false,
        date                : ''
    }

    componentDidMount(){
        let url = queryString.parse(this.props.location.search)
        Axios.get(`${API_URL}/transaction/getTransaction?idtransaction=${url.i}`)
        .then((res)=>{
            console.log(res.data)
            console.log(res.data[0].kelasName)
            this.setState({transData: res.data[0]})
        }).catch((err)=>{
            console.log(err)
        })
    }
    componentDidUpdate(){
        // console.log(this.props.selectedPaket)
        // console.log(this.props.userId)
        console.log(this.state.date)
        
    }

    handleDateChange = (date) =>{
        this.setState({SelectedDate:date})
    }

    onAddImageFileChange = (e) => {
        // console.log(document.getElementById('addImagePost').files[0])
        // console.log(e.target.files[0])
        if(e.target.files[0]) {
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile: e.target.files[0]})
        }
        else {
            this.setState({ addImageFileName: 'Select Image Kelas....', addImageFile: undefined })
        }
    }

    onBtnSaveClick=()=>{
        this.setState({loading: true})
        var invoice = this.state.transData.invoice
        var nama = this.name.value
        var noRek = this.rek.value
        var nominal = this.nominal.value
        var bank = this.state.bank
        // var tanggal = this.state.selectedDate
        var userId  = this.props.userId
        var tanggal = this.refs.date.refs.innerDate.value

       
        // console.log(data)
        
        if(nama){
            var formData = new FormData()
            const token     = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }

            var data = {
                invoice,
                nama,
                noRek,
                nominal,
                bank,
                tanggal,
                userId
            }
            console.log(data)

            formData.append('image', this.state.addImageFile)
            formData.append('data', JSON.stringify(data))
            console.log(formData)
            Axios.post(API_URL + '/konfirmasi/addKonfirmasi', formData, headers)
            .then((res)=>{
                this.setState({kelasData: res.data, open: false, loading: false, openTerima: true})
                console.log(this.state.kelasName)
            }).catch((err)=>{
                console.log(err)
            })

        }else{
            alert('name kelas harus diisi!')
        }
    }

    handleClickOpen = () =>{
        this.setState({open: true})
    }
    handleClickOpenTerima = () =>{
        this.setState({openTerima: true})
    }


    handleClose = () =>{
        this.setState({open: false, openTerima: false})
    }
    onRadioBankChange = (event) => {
        this.setState({bank: event.target.value})
    }

    render(){
        if(!this.state.transData){
            return <LoadingPage/>
        }
        console.log(this.state.selectedDate)
        console.log(this.props.transaksi)
        const {textField, menu} = useStyles
        return(
            <div id='paymentPage' className='paymentPage'>
                <div className='container  mt-5 mb-5 d-flex justify-content-center align-items-center '>
                    <div className='content'>
                        <div className='title '>
                            <h4>Invoive #{this.state.transData.invoice}</h4>
                            <p>{this.state.transData.date}</p>
                        </div>
                        <div className='isi mt-2'>
                            <p>To : {this.state.transData.NamaUser}</p>
                            <div className='harga'>
                                <h4>Paket Qelas {this.state.transData.durasi} hari</h4>
                                <h1>Rp. {numeral(this.state.transData.harga).format('0,0')}</h1>
                            </div>
                            <p><i>*Tiga digit angka paling akhir, merupakan kode unik untuk transaksi anda, <br/> monhon untuk melakukan pembayaran sesuai nilai tagihan yang tertera. </i></p>
                        </div>
                        <div className='bankContainer '>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-5 bank' style={{textAlign:'right', marginRight:'1em'}}>
                                    <img src={Bca} width='100px'/>
                                    <p>89000987899</p>
                                    <p>a.n Ahmad Hisbullah</p>
                                </div>
                                <div className='col-5 bank' style={{textAlign:'left'}}>
                                    <img src={Mandiri} width='100px'/>
                                    <p>89000987899</p>
                                    <p>a.n Ahmad Hisbullah</p>
                                </div>
                            </div>
                        </div>
                        {/* <Link to='' style={{textDecoration:'none'}}> */}
                            <div className='konfirmasi' onClick={this.handleClickOpen}>
                                Konfirmasi Pembayaran
                            </div>
                        {/* </Link> */}
                    </div>
                </div>

                {/* ===============DIALOG */}

                <Dialog open={this.state.open} TransitionComponent={Transition} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth="xl">
                    <DialogTitle id="form-dialog-title">Konfirmasi Pembayaran</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin='dense' inputRef={el => this.name = el}  label="Nama Pemilik Rekening" type='text' fullWidth/>
                        <TextField autoFocus margin='dense' inputRef={rek => this.rek = rek}  label="Nomor Rekening" type='text' fullWidth/>
                        <TextField autoFocus margin='dense' inputRef={nom => this.nominal = nom}  label="Nominal transfer" type='text' fullWidth/>
                        
                        <FormLabel component='legend' className='mt-4'>Bank</FormLabel>
                        <RadioGroup aria-label='level' name='level' value={this.state.bank}  onChange={this.onRadioBankChange}>
                            <FormControlLabel value='Bank BCA' control={<Radio color='primary'/>} label='Bank BCA'/>
                            <FormControlLabel value='Bank Mandiri' control={<Radio color='primary'/>} label='Bank Mandiri'/>
                        </RadioGroup>
                    
                        <FormGroup>
                            <Label for="exampleDatetime">Datetime</Label>
                            <Input
                                type="date"
                                ref='date'
                                innerRef='innerDate'
                                onChange={()=>this.setState({date: this.refs.date.refs.innerDate.value})}
                                name="datetime"
                                id="exampleDatetime"
                                placeholder="datetime placeholder"
                            />
                        </FormGroup>
                        <CustomInput type='file' id='kelasImage' className='mt-2'  label={this.state.addImageFileName} onChange={this.onAddImageFileChange}/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onBtnSaveClick} color="primary">
                        {this.state.loading ? <Spinner color="warning" /> : 'Submit' }
                    </Button>
                    </DialogActions>
                </Dialog>

                {/* =================== dialog konfirmasi diterima =================== */}

                <Dialog
                    open={this.state.openTerima}
                    TransitionComponent={TransitionTerima}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Terima Kasih"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Bukti Pembayaran anda sudah kami terima.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapsStateToProps = ({paket, auth, transaksi})=>{
    return{
        selectedPaket: paket.selectedPaket,
        userId  : auth.userId,
        transData   : transaksi.transaksi
    }
}

export default connect(mapsStateToProps) (Payment);