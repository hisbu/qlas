import React, {Component} from 'react'
import './styleKelas.css'
import { 
    makeStyles,
    Table, TableBody, TableCell, TableHead, TableRow,
    Button, TextField , Dialog, DialogActions, DialogContent, DialogTitle, Slide, MenuItem,
     DialogContentText
    } from '@material-ui/core'
import {EditOutlined, DeleteOutline} from '@material-ui/icons'
import { Spinner } from 'reactstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'
import { Editor } from '@tinymce/tinymce-react'
// const numeral = require('numeral')


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


class ManageModul extends Component{
    state={
        modulData           :'',
        editData            :'',
        kelasData           :'',
        open                : false,
        openTerima          : false,
        openEdit            : false,
        kelas               :'',
        content             : '',
        selectedEditModulId : 0,
        deleteId            : 0,
        loading             : false
    }

    componentDidMount(){

        Axios.get(`${API_URL}/modul/getModul`)
        .then((res)=>{
            console.log(res.data)
            this.setState({modulData: res.data})
            
        }).catch((err)=>{
            console.log(err)
        })

        // Axios.get(`${API_URL}/modul/getModul`)
        // .then((res)=>{
        //     this.setState({modulData: res.data})
        //     console.log(res.data)
        // })

        Axios.get(`${API_URL}/kelas/getKelas`)
            .then((res)=>{
                this.setState({kelasData: res.data})
            }).catch((err)=>{
                console.log(err)
            })
    }

    componentDidUpdate(){
        // console.log(this.state.openEdit)
        // console.log(this.state.selectedEditModulId)
        // console.log('edit data ======>', this.state.editData)
        console.log('delete id ====> ', this.state.deleteId)
        
    }

    renderData = () =>{
        console.log(this.state.modulData)
        var modulData = this.state.modulData
        return modulData.map((val, i) => {
            if(val.idmodul !== this.selectedEditModulId){
                return(
                    <TableRow >
                        <TableCell>{i+1}</TableCell>
                        <TableCell><Link to={`/detail?id=${val.idmodul}`}>{val.nama}</Link></TableCell>
                        <TableCell>{val.title}</TableCell>
                        <TableCell className='fontCell'><div dangerouslySetInnerHTML={{ __html:val.content? val.content.split(' ').splice(0,8).join(' '): null}}/></TableCell>
                        <TableCell>{val.video}</TableCell>
                        <TableCell>
                            <EditOutlined style={{pointerEvents:'cursor'}}  onClick={()=> this.setState({selectedEditModulId: val.idmodul, openEdit:true, editData: val})}/>
                        </TableCell>
                        <TableCell>
                            <DeleteOutline onClick={()=>this.setState({openTerima: true, deleteId: val.idmodul})}/>
                        </TableCell>
                    </TableRow>
                )
            }
            return <nbsp/>
        });
    }

    renderKelas = () =>{
        var kelasData = this.state.kelasData
        return kelasData.map((val, i) =>{
            return (
                <MenuItem key={val.kelasName} value={val.idKelas}>{val.kelasName}</MenuItem>
            )
        })
    }

    handleClickOpen = () =>{
        this.setState({open: true})
    }

    handleClickOpenTerima = () =>{
        this.setState({openTerima: true})
    }

    handleClose = () =>{
        this.setState({open: false})
    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
        this.setState({content: e.target.getContent()})
      }

    handleChange = name => event => {
        console.log(event.target.value)
        this.setState({kelas: event.target.value})
    // setValues({ ...values, [name]: event.target.value });
    };

    // onRadioLevelChange = (event) => {
    //     this.setState({level: event.target.value})
    // }

    onBtnSaveClick = () => {
        this.setState({loading: true})
        var idkelas = this.state.kelas
        var title = this.title.value
        var content = this.state.content
        var video = this.linkVideo.value
        var isDeleted = 0

       
        // console.log(data)
        
        if(title){
            var formData = new FormData()
            const token     = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                    // 'Content-Type': 'multipart/form-data'
                }
            }

            var data = {
                idkelas,
                title,
                content,
                video,
                isDeleted
            }
            

            formData.append('data', JSON.stringify(data))
            console.log(formData)
            Axios.post(API_URL + '/modul/addModul', data, headers)
            .then((res)=>{
                this.setState({modulData: res.data, open: false, loading: false})

                // console.log(this.state.kelasName)
            }).catch((err)=>{
                console.log(err)
            })

        }else{
            alert('name kelas harus diisi!')
        }

    }

    onBtnUpdateClick = () => {
        this.setState({loading: true})
        var title = this.etitle.value
        var idkelas = this.state.kelas ? this.state.kelas : this.state.editData.idKelas
        var content = this.state.content ? this.state.content : this.state.editData.content
        var video = this.elinkVideo.value
        

       
        var formData = new FormData()
        const token = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`
                // 'Content-Type': 'multipart/form-data'
            }
        }
        
        var data = {
            idkelas,
            title,
            content,
            video
        }
        console.log(data)

            formData.append('data', JSON.stringify(data))

            Axios.put(API_URL + '/modul/editModul?idmodul='+this.state.editData.idmodul, data, headers)
            .then((res)=>{
                this.setState({modulData: res.data, openEdit: false, loading: false})
                console.log(this.state.kelasName)
            }).catch((err)=>{
                console.log(err)
            })

    }

    onBtnDeleteModulClick = (id) =>{
        this.setState({openTerima: false})
        console.log('masuk delet'+ id)
        const token = localStorage.getItem('token')
        const headers = {
            headers: { 
                'Authorization': `Bearer ${token}`,
            }
        }
        Axios.put(`${API_URL}/modul/deleteModul?idmodul=${id}`, headers)
        .then((res)=>{
            this.setState({modulData: res.data})
            console.log(this.state.modulData)
        }).catch((err)=>[
            console.log(err)
        ])
    }

    render(){
        console.log(this.state.modulData)
        console.log(this.state.kelasData)
        const {textField, menu} = useStyles
        if(!this.state.modulData){
            return <LoadingPage/>
        }
        if(!this.state.kelasData){
            return <LoadingPage/>
        }
        return(
            <div id='manageModul' className='manageKelas container mt-4 mb-4'>
                <div>
                    <h1>manage kelas</h1>
                </div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Add New Modul
                </Button>
                <Dialog open={this.state.open} TransitionComponent={Transition} onClose={this.handleClose} aria-labelledby="form-dialog-title" width="90%">
                    <DialogTitle id="form-dialog-title">Add New Modul</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="kelas"
                            select
                            label="kelas"
                            className={textField}
                            value={this.state.kelas}
                            onChange={this.handleChange()}
                            SelectProps={{
                                MenuProps: {
                                    className: menu,
                                },
                            }}
                            margin="normal"
                            fullWidth
                        >
                            {/* Render dropwodn menu */}
                            {this.renderKelas()} 
                        </TextField>
                        <TextField autoFocus margin='dense' inputRef={el => this.title = el}  label="Judul Modul" type='text' fullWidth/>
                        <Editor
                            initialValue="<p>This is the initial content of the editor</p>"
                            apiKey='r5l0pst5d7mcd3ii4gx7eubiqzsnvgydh0zz1zbo93w30f04'
                            init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                            width: '640'
                            }}
                            
                            onChange={this.handleEditorChange}
                        />
                        <TextField inputRef={dur => this.linkVideo = dur}  margin="dense" id="video"  label="Link Video" type="text" fullWidth />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onBtnSaveClick} color="primary">
                        {this.state.loading ? <Spinner color="warning"/> :'Save'}
                    </Button>
                    </DialogActions>
                </Dialog>

                {/* ============== TABLE DATA KELAS ============== */}
                <div className='dataContainer row'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width:'10%'}}>No</TableCell>
                                <TableCell>Nama Kelas</TableCell>
                                <TableCell>Judul Modul</TableCell>
                                <TableCell>Content</TableCell>
                                <TableCell>Link Video</TableCell>
                                <TableCell colSpan='2'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderData()}
                        </TableBody>
                    </Table>
                </div>

                {/* ================================- EDIT KELAS -=================================== */}
                <Dialog open={this.state.openEdit} TransitionComponent={Transition} onClose={this.handleClose} aria-labelledby="form-dialog-title"  maxWidth="xl">
                <DialogTitle id="form-dialog-title">Edit Modul</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="kelas"
                            select
                            label="Kelas"
                            className={textField}
                            value={this.state.kelas ? this.state.kelas : this.state.editData.idkelas}
                            onChange={this.handleChange()}
                            SelectProps={{
                                MenuProps: {
                                    className: menu,
                                },
                            }}
                            margin="normal"
                            fullWidth
                        >
                            {this.renderKelas()}
                        </TextField>
                        <TextField autoFocus margin='dense' inputRef={el => this.etitle = el} defaultValue={this.state.editData.title}  label="Judul Modul" type='text' fullWidth/>
                        <Editor
                            value={this.state.editData.content}
                            initialValue="<p>This is the initial content of the editor</p>"
                            apiKey='r5l0pst5d7mcd3ii4gx7eubiqzsnvgydh0zz1zbo93w30f04'
                            init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChange}
                        />
                        <TextField inputRef={evid => this.elinkVideo = evid} defaultValue={this.state.editData.video}  margin="dense" id="video"  label="Link Video" type="text" fullWidth />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=>this.setState({openEdit: false, selectedEditModulId:0})} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onBtnUpdateClick} color="primary">
                        {this.state.loading ? <Spinner color="warning"/> : 'Update'}
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
                    <DialogTitle id="alert-dialog-slide-title">{"Konfirmasi!"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Yakin akan menghapus module ini.?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=> this.setState({openTerima: false})} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>this.onBtnDeleteModulClick(this.state.deleteId)} color="primary">
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default ManageModul;