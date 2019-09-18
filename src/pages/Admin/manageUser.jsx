import React, {Component} from 'react'
import { 
    Table, TableBody, TableCell, TableHead, TableRow,
    Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide,
     DialogContentText
    } from '@material-ui/core'
import { Close, Check} from '@material-ui/icons'
import Axios from 'axios'
import {API_URL} from '../../helpers'
import LoadingPage from '../loadingPage'
const numeral = require('numeral')

const TransitionTerima = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

class ManageUsers extends Component{
    state={
        userData:'',
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
        Axios.get(`${API_URL}/user/getUsers`)
        .then((res)=>{
            console.log(res.data)
            this.setState({userData: res.data})
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
        console.log(this.state.userData)
        var userData = this.state.userData
        return userData.reverse().map((val, i) => {
                return(
                    <TableRow >
                        <TableCell>{i+1}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.firstName}</TableCell>
                        <TableCell>{val.lastName}</TableCell>
                        <TableCell>{val.gender}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>{val.phone}</TableCell>
                        <TableCell>{val.role}</TableCell>
                        <TableCell>
                            <Check style={{pointerEvents:'cursor'}}  onClick={()=> this.onBtnKonfirmasiClick(val.idtransaction)}/>
                        </TableCell>
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
        //     this.setState({userData: res.data, openTerima: true})
        // }).catch((err)=>{
        //     console.log(err)
        // })

    }
    render(){
        if(!this.state.userData){
            return <LoadingPage/>
        }
        return (
            <div className='container mt-4 mb-4'>
                <div className='dataContainer row'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{width:'10%'}}>No</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Role</TableCell>
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

export default ManageUsers;