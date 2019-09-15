import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import './transaksiStyle.css'
// import Axios from 'axios'
// import { API_URL } from '../../helpers'
import Bca from '../../supports/img/BCA_logo.svg'
import Mandiri from '../../supports/img/Bank_Mandiri_logo.svg'
import { 
    makeStyles,
    Button, TextField , Dialog, DialogActions, DialogContent, DialogTitle, Slide, MenuItem,
    FormLabel, RadioGroup, FormControlLabel, Radio
    } from '@material-ui/core'
import { DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import { CustomInput } from 'reactstrap'
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux'

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


class Payment extends Component{
    state = {
        open                : false,
        addImageFileName    : 'Upload Bukti Bayar...', 
        addImageFile        : undefined, 
        selectedDate        : new Date()
    }

    componentDidMount(){
    }
    componentDidUpdate(){
        console.log(this.props.selectedPaket)
        console.log(this.props.userId)
        
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

    handleClickOpen = () =>{
        this.setState({open: true})
    }

    handleClose = () =>{
        this.setState({open: false})
    }
    onRadioLevelChange = (event) => {
        this.setState({level: event.target.value})
    }
    render(){
        console.log(this.state.selectedDate)
        console.log(this.props.transaksi)
        const {textField, menu} = useStyles
        return(
            <div id='paymentPage' className='paymentPage'>
                <div className='container  mt-5 mb-5 d-flex justify-content-center align-items-center '>
                    <div className='content'>
                        <div className='title '>
                            <h4>Invoive {this.props.transaksi.invoice}</h4>
                            <p>tanggal</p>
                        </div>
                        <div className='isi mt-2'>
                            <p>To : Ahmad hisbullah</p>
                            <div className='harga'>
                                <h4>Paket Qelas 30 hari</h4>
                                <h1>Rp. 500.320</h1>
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
                        <TextField autoFocus margin='dense' inputRef={el => this.name = el}  label="Nomor Rekening" type='text' fullWidth/>
                        <TextField autoFocus margin='dense' inputRef={el => this.name = el}  label="Nominal transfer" type='text' fullWidth/>
                        
                        <FormLabel component='legend' className='mt-4'>Bank</FormLabel>
                        <RadioGroup aria-label='level' name='level' value={this.state.level}  onChange={this.onRadioLevelChange}>
                            <FormControlLabel value='bca' control={<Radio color='primary'/>} label='Bank BCA'/>
                            <FormControlLabel value='mandiri' control={<Radio color='primary'/>} label='Bank Mandiri'/>
                        </RadioGroup>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <DateTimePicker
                                autoOk
                                ampm={false}
                                disableFuture
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                label="Tanggal transfer"
                            />
                        </MuiPickersUtilsProvider>
                        <CustomInput type='file' id='kelasImage' className='mt-2'  label={this.state.addImageFileName} onChange={this.onAddImageFileChange}/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onBtnSaveClick} color="primary">
                        Save
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