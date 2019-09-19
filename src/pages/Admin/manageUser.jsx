import React, {Component} from 'react'
import { 
    Table, TableBody, TableCell, TableHead, TableRow,
    Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide,
     DialogContentText, TextField, Menu, makeStyles, MenuItem
    } from '@material-ui/core'
import { Edit, Check} from '@material-ui/icons'
import Axios from 'axios'
import { Spinner} from 'reactstrap'
import {API_URL} from '../../helpers'
import LoadingPage from '../loadingPage'
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}));

const TransitionTerima = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

class ManageUsers extends Component{
    state={
        userData:'',
        editData:'',
        openEdit:false,
        role: '',
        roledata:'',
        loading: false
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

        Axios.get(`${API_URL}/role/getRoles`)
        .then((res)=>{
            console.log(res.data)
            this.setState({roledata: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleClickOpenTerima = () =>{
        this.setState({openTerima: true})
    }


    handleClose = () =>{
        this.setState({ openEdit: false})
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
                            <Edit style={{pointerEvents:'cursor'}}  onClick={()=> this.setState({openEdit:true, editData: val})}/>
                        </TableCell>
                    </TableRow>
                )
            });
    }

    renderRole = () =>{
        var role = this.state.roledata
        return role.map((val) =>{
            return (
                <MenuItem key={val.roleName} value={val.id}>{val.roleName}</MenuItem>
            )
        })
    }

    onBtnUpdateClick=()=>{
        this.setState({loading: true})
        console.log('=============', this.state.editData.id)
        var roleId = this.state.role ? this.state.role : this.state.editData.id
       console.log('role id ------------- ',roleId)
        const token = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        
        var data = {
            roleId
        }
        console.log(data)


            Axios.put(API_URL + '/user/editRole?id='+this.state.editData.id, data, headers)
            .then((res)=>{
                this.setState({userData: res.data, openEdit: false, loading: false})
                console.log(this.state.kelasName)
            }).catch((err)=>{
                console.log(err)
            })

    }

    onBtnKonfirmasiClick=(id)=>{
        const token     = localStorage.getItem('token')
        console.log(token)

    }

    handleChange = name => event => {
        console.log(event.target.value)
        this.setState({role: event.target.value})
    // setValues({ ...values, [name]: event.target.value });
    };
    render(){
        const {textField, menu, formControl} = useStyles
        if(!this.state.userData){
            return <LoadingPage/>
        }
        if(!this.state.roledata) return <LoadingPage/>
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
                        open={this.state.openEdit}
                        TransitionComponent={TransitionTerima}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">{"Terima Kasih"}</DialogTitle>
                        <DialogContent>
                        <TextField
                            id="role"
                            select
                            label="Edit Role"
                            className={textField}
                            value={this.state.role ? this.state.role : this.state.editData.roleId}
                            onChange={this.handleChange()}
                            SelectProps={{
                                MenuProps: {
                                    className: menu,
                                },
                            }}
                            margin="normal"
                            fullWidth
                        >
                            {this.renderRole()}
                        </TextField>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.onBtnUpdateClick} color="primary">
                            {this.state.loading ? <Spinner color="warning"/> : 'Update'}
                        </Button>
                        </DialogActions>
                    </Dialog>
            </div>
        )
    }
}

export default ManageUsers;