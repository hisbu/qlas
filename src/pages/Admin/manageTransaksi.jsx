import React, {Component} from 'react'
import { 
    Table, TableBody, TableCell, TableHead, TableRow,
    Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide,
     DialogContentText
    } from '@material-ui/core'
import { Close, Check} from '@material-ui/icons'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios'
import {API_URL} from '../../helpers'
import LoadingPage from '../loadingPage'
const numeral = require('numeral')

const TransitionTerima = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

class ManageTransaksi extends Component{
    state={
        transaksiData:'',
        // selectedKonfirmasi:'',
        // openTerima          : false,
    }

    componentDidMount(){
        const token     = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        Axios.get(`${API_URL}/transaction/getTransaction`, headers)
        .then((res)=>{
            console.log(res.data)
            this.setState({transaksiData: res.data})
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
        console.log(this.state.transaksiData)
        var transaksiData = this.state.transaksiData
        return transaksiData.reverse().map((val, i) => {
                return(
                    <TableRow >
                        <TableCell>{i+1}</TableCell>
                        <TableCell>{val.invoice}</TableCell>
                        <TableCell>{val.paketId}</TableCell>
                        <TableCell>Rp. {numeral(val.harga.toFixed(2)).format('0,0')}</TableCell>
                        <TableCell>{val.userId}</TableCell>
                        <TableCell>{val.date}</TableCell>
                        <TableCell>{val.status}</TableCell>
                        {/* <TableCell>
                            <Check style={{pointerEvents:'cursor'}}  onClick={()=> this.onBtnKonfirmasiClick(val.idtransaction)}/>
                        </TableCell> */}
                    </TableRow>
                )
            });
    }

    onBtnKonfirmasiClick=(id)=>{
        const token     = localStorage.getItem('token')
        console.log(token)
            // var headers = {
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // }
        // Axios.put(`${API_URL}/transaction/konfirmasi/${id}`)
        // .then((res)=>{
        //     console.log(res.data)
        //     this.setState({transaksiData: res.data, openTerima: true})
        // }).catch((err)=>{
        //     console.log(err)
        // })

    }
    render(){
        if(!this.state.transaksiData){
            return <LoadingPage/>
        }
        if(this.props.roleId === 3){
            return <Redirect to = '/'/>
        }
        return (
            <div className='container mt-4 mb-4'>
                <div className='dataContainer row'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{width:'10%'}}>No</TableCell>
                                    <TableCell>Invoice</TableCell>
                                    <TableCell>Paket Id</TableCell>
                                    <TableCell>harga</TableCell>
                                    <TableCell>user Id</TableCell>
                                    <TableCell>date</TableCell>
                                    <TableCell>Status</TableCell>
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

const mapStateToProps = (state)=>{
    return {
        roleId      : state.auth.roleId
    }
  }

export default connect(mapStateToProps) (ManageTransaksi);