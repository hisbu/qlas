import React, {Component} from 'react'
import { 
    makeStyles,
    Table, TableBody, TableCell, TableHead, TableRow, Input,
    Button, TextField , Dialog, DialogActions, DialogContent, DialogTitle, Slide, MenuItem,
    FormLabel, RadioGroup, FormControlLabel, Radio, DialogContentText
    } from '@material-ui/core'
import {EditOutlined, Close, Check, CancelOutlined} from '@material-ui/icons'
import Axios from 'axios'
import {API_URL} from '../../helpers'
import LoadingPage from '../loadingPage'
const numeral = require('numeral')

const TransitionTerima = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

class ManageKonfirmasi extends Component{
    state={
        konfirmasiData:'',
        selectedKonfirmasi:'',
        openTerima          : false,
    }

    componentDidMount(){
        const token     = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        Axios.get(`${API_URL}/konfirmasi/getKonfirmasi`, headers)
        .then((res)=>{
            console.log(res.data)
            this.setState({konfirmasiData: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleClickOpenTerima = () =>{
        this.setState({openTerima: true})
    }


    handleClose = () =>{
        this.setState({ openTerima: false})
    }
    renderData=()=>{
        console.log(this.state.konfirmasiData)
        var konfirmasiData = this.state.konfirmasiData
        return konfirmasiData.map((val, i) => {
            if(val.idkonfirmasi !== this.selectedKonfirmasi){
                return(
                    <TableRow >
                        <TableCell>{i+1}</TableCell>
                        <TableCell>{val.invoice}</TableCell>
                        <TableCell>{val.nama}</TableCell>
                        <TableCell>{val.noRek}</TableCell>
                        <TableCell>Rp. {numeral(val.nominal).format('0,0')}</TableCell>
                        <TableCell>{val.bank}</TableCell>
                        <TableCell>{val.tanggal}</TableCell>
                        <TableCell>{val.status}</TableCell>
                        <TableCell><img src={`${API_URL}${val.image}`} alt={val.invoice} height='75px'/></TableCell>
                        <TableCell>
                            <Check style={{pointerEvents:'cursor'}}  onClick={()=> this.onBtnKonfirmasiClick(val.idkonfirmasi)}/>
                        </TableCell>
                        <TableCell>
                            <Close onClick={()=> this.onBtnDeleteKelasClick(val.idKelas)}/>
                        </TableCell>
                    </TableRow>
                )
            }
            return <nbsp/>
        });
    }

    onBtnKonfirmasiClick=(id)=>{
        const token     = localStorage.getItem('token')
        console.log(token)
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        Axios.put(`${API_URL}/konfirmasi/konfirmasi/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({konfirmasiData: res.data, openTerima: true})
        }).catch((err)=>{
            console.log(err)
        })

    }
    render(){
        if(!this.state.konfirmasiData){
            return <LoadingPage/>
        }
        return (
            <div className='container mt-4 mb-4'>
                <div className='dataContainer row'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{width:'10%'}}>No</TableCell>
                                    <TableCell>Invoice</TableCell>
                                    <TableCell>Nama</TableCell>
                                    <TableCell>No Rekening</TableCell>
                                    <TableCell>Nomilan</TableCell>
                                    <TableCell>Bank</TableCell>
                                    <TableCell>Tanggal</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell colSpan='2'>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.renderData()}
                            </TableBody>
                        </Table>
                    </div>

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
                            Pemnayaran telah berhasil dikonfirmasi
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

export default ManageKonfirmasi;