import React, {Component} from 'react'
import './styleKelas.css'
import { 
        makeStyles,
        Table, TableBody, TableCell, TableHead, TableRow, Input,
        Button, TextField , Dialog, DialogActions, DialogContent, DialogTitle, Slide, MenuItem,
        FormLabel, RadioGroup, FormControlLabel, Radio
        } from '@material-ui/core'
import { CustomInput } from 'reactstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'
import { Editor } from '@tinymce/tinymce-react'
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

class ManageKelas extends Component{
    state={
        kelasData           :'',
        editData            :'',
        open                : false,
        openEdit            : false,
        category            :'',
        level               :'',
        addImageFileName    : 'Select Image Kelas...', 
        addImageFile        : undefined, 
        description         : '',
        selectedEditKelasId : 0,
        editImageFileName   : '',
        editImageFile       : undefined,
    }

    componentDidMount(){
        // const token = localStorage.getItem('token')
        // const headers = {
        //     headers:{
        //         'Authorization': `Bearer ${token}`,
        //     }
        // }
        Axios.get(`${API_URL}/kelas/getKelas`)
        .then((res)=>{
            console.log(res.data)
            this.setState({kelasData: res.data})
        }).catch((err)=>{
            console.log(err)
        })
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

    onEditImageFileChange = (e) => {
        if(e.target.files[0]) {
            this.setState({ editImageFileName: e.target.files[0].name, editImageFile: e.target.files[0]})
        }
        else {
            this.setState({ editImageFileName: '', editImageFile: undefined })
        }
    }

    componentDidUpdate(){
        console.log(this.state.openEdit)
        console.log(this.state.selectedEditKelasId)
        console.log(this.state.editData)
        console.log(this.state.level)
    }

    renderData = () =>{
        console.log(this.state.kelasData)
        var kelasData = this.state.kelasData
        return kelasData.map((val, i) => {
            if(val.idKelas !== this.selectedEditKelasId){
                return(
                    <TableRow>
                        <TableCell>{i+1}</TableCell>
                        <TableCell><Link to={`/detail?id=${val.idKelas}`}>{val.kelasName}</Link></TableCell>
                        <TableCell>{val.category}</TableCell>
                        <TableCell>{val.description}</TableCell>
                        <TableCell>{val.kelasDuration} days</TableCell>
                        <TableCell>Rp. {numeral(val.price).format('0,0')}</TableCell>
                        <TableCell>{val.level}</TableCell>
                        <TableCell>{val.penyusun}</TableCell>
                        <TableCell><img src={`${API_URL}${val.image}`} alt={val.kelasName} height='75px'/></TableCell>
                        <TableCell><Input type='button' className='btn btn-primary' value='Edit' onClick={()=> this.setState({selectedEditKelasId: val.idKelas, openEdit:true, editData: val})} /></TableCell>
                        <TableCell><Input type='button' className='btn btn-danger' value='Delete' onClick={()=> this.onBtnDeleteKelasClick(val.idKelas)}/></TableCell>
                    </TableRow>
                )
            }
            return <nbsp/>
        });
    }

    handleClickOpen = () =>{
        this.setState({open: true})
    }

    handleClose = () =>{
        this.setState({open: false})
    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
        this.setState({description: e.target.getContent()})
      }

    handleChange = name => event => {
        console.log(event.target.value)
        this.setState({category: event.target.value})
    // setValues({ ...values, [name]: event.target.value });
    };

    onRadioLevelChange = (event) => {
        this.setState({level: event.target.value})
    }

    onBtnSaveClick = () => {
        var kelasName = this.name.value
        var catId = this.state.category
        var description = this.state.description
        var kelasDuration = this.duration.value
        var price = this.price.value
        var level = this.state.level
        var penyusun = this.penyusun.value
        // var image = this.onAddImageFileChange

       
        // console.log(data)
        
        if(kelasName){
            var formData = new FormData()
            const token     = localStorage.getItem('token')
            var headers = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }

            var data = {
                kelasName,
                catId,
                description,
                kelasDuration,
                price,
                level,
                penyusun
            }

            formData.append('image', this.state.addImageFile)
            formData.append('data', JSON.stringify(data))

            Axios.post(API_URL + '/kelas/addKelas', formData, headers)
            .then((res)=>{
                this.setState({kelasData: res.data, open: false})
                console.log(this.state.kelasName)
            }).catch((err)=>{
                console.log(err)
            })

        }else{
            alert('name kelas harus diisi!')
        }

    }

    onBtnUpdateClick = () => {
        var kelasName = this.Ename.value
        var catId = this.state.category ? this.state.category : this.state.editData.catId
        var description = this.state.description ? this.state.description : this.state.editData.description
        var kelasDuration = this.Eduration.value
        var price = this.Eprice.value
        var level = this.state.level ? this.state.level : this.state.editData.level
        var penyusun = this.penyusun.value

       
        var formData = new FormData()
        const token = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }
        
        var data = {
            kelasName,
            catId,
            description,
            kelasDuration,
            price,
            level,
            penyusun
        }
        console.log(data)

            formData.append('image', this.state.editImageFile)
            formData.append('data', JSON.stringify(data))

            Axios.put(API_URL + '/kelas/editKelas/'+this.state.editData.idKelas, formData, headers)
            .then((res)=>{
                this.setState({kelasData: res.data, openEdit: false})
                console.log(this.state.kelasName)
            }).catch((err)=>{
                console.log(err)
            })

    }

    onBtnDeleteKelasClick = (id) =>{
        console.log('masuk delet'+ id)
        const token = localStorage.getItem('token')
        const headers = {
            headers: { 
                'Authorization': `Bearer ${token}`,
            }
        }
        Axios.delete(`${API_URL}/kelas/deleteKelas/${id}`, headers)
        .then((res)=>{
            this.setState({kelasData: res.data})
            console.log(this.state.kelasData)
        }).catch((err)=>[
            console.log(err)
        ])
    }

    render(){
        console.log(this.state.kelasData)
        const {textField, menu} = useStyles
        if(this.state.kelasData.length === 0){
            return <LoadingPage/>
        }
        return(
            <div id='manageKelas' className='manageKelas container'>
                <div>
                    <h1>manage kelas</h1>
                </div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Add New Kelas
                </Button>
                <Dialog open={this.state.open} TransitionComponent={Transition} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth="xl">
                    <DialogTitle id="form-dialog-title">Add New Kelas</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin='dense' inputRef={el => this.name = el}  label="Kelas Name" type='text' fullWidth/>
                        <TextField
                            id="category"
                            select
                            label="Platform"
                            className={textField}
                            value={this.state.category}
                            onChange={this.handleChange()}
                            SelectProps={{
                                MenuProps: {
                                    className: menu,
                                },
                            }}
                            margin="normal"
                            fullWidth
                        >
                            <MenuItem key='website' value='1'>Website</MenuItem>
                            <MenuItem key='mobile' value='2'>Mobile</MenuItem>
                            <MenuItem key='system' value='3'>System</MenuItem>
                        </TextField>
                        <FormLabel component='legend' className='mt-4'>Level</FormLabel>
                        <RadioGroup aria-label='level' name='level' value={this.state.level}  onChange={this.onRadioLevelChange}>
                            <FormControlLabel value='pemula' control={<Radio color='primary'/>} label='Pemula'/>
                            <FormControlLabel value='menengah' control={<Radio color='primary'/>} label='Menengah'/>
                            <FormControlLabel value='mahir' control={<Radio color='primary'/>} label='Mahir'/>
                        </RadioGroup> 
                        <Editor
                            initialValue="<p>This is the initial content of the editor</p>"
                            apiKey='r5l0pst5d7mcd3ii4gx7eubiqzsnvgydh0zz1zbo93w30f04'
                            init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChange}
                        />
                        <TextField inputRef={dur => this.duration = dur}  margin="dense" id="duration"  label="Kelas Duration" type="text" fullWidth />
                        <TextField inputRef={p => this.price = p}  margin="dense" id="price"  label="Price" type="text" fullWidth />
                        <CustomInput type='file' id='kelasImage'  label={this.state.addImageFileName} onChange={this.onAddImageFileChange}/>
                        <TextField inputRef={penyusun => this.penyusun = penyusun}  margin="dense" id="penyusun"  label="Penyusun Materi" type="text" fullWidth />
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

                {/* ============== TABLE DATA KELAS ============== */}
                <div className='dataContainer row'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Kelas Name</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Descriptioin</TableCell>
                                <TableCell>Kelas Duration</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Level</TableCell>
                                <TableCell>Penyusun</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell colSpan='2'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderData()}
                        </TableBody>
                    </Table>
                </div>

                {/* ================================- EDIT KELAS -=================================== */}
                <Dialog open={this.state.openEdit} TransitionComponent={Transition} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Kelas</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin='dense' inputRef={el => this.Ename = el} defaultValue={this.state.editData.kelasName}  label="Kelas Name" type='text' fullWidth/>
                        <TextField
                            id="category"
                            select
                            label="Category"
                            className={textField}
                            value={this.state.category ? this.state.category : this.state.editData.catId}
                            onChange={this.handleChange()}
                            SelectProps={{
                                MenuProps: {
                                    className: menu,
                                },
                            }}
                            margin="normal"
                            fullWidth
                        >
                            <MenuItem key='website' value='1'>Website</MenuItem>
                            <MenuItem key='mobile' value='2'>Mobile</MenuItem>
                            <MenuItem key='system' value='3'>System</MenuItem>
                        </TextField>
                        <RadioGroup aria-label='level' name='level' defaultValue={this.state.editData.level}  onChange={this.onRadioLevelChange}>
                            <FormControlLabel value='pemula' control={<Radio/>} label='Pemula'/>
                            <FormControlLabel value='menengah' control={<Radio/>} label='Menengah'/>
                            <FormControlLabel value='mahir' control={<Radio/>} label='Mahir'/>
                        </RadioGroup> 
                        <Editor
                            // initialValue="<p>This is the initial content of the editor</p>"
                            value={this.state.editData.description}
                            // defaultValue={this.state.editData.description}
                            apiKey='r5l0pst5d7mcd3ii4gx7eubiqzsnvgydh0zz1zbo93w30f04'
                            init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onChange={this.handleEditorChange}
                        />
                        <TextField inputRef={dur => this.Eduration = dur} defaultValue={this.state.editData.kelasDuration}  margin="dense" id="name"  label="Kelas Duration" type="text" fullWidth />
                        <TextField inputRef={p => this.Eprice = p} defaultValue={this.state.editData.price}  margin="dense" id="name"  label="Price" type="text" fullWidth />
                        <CustomInput type='file' id='kelasImage'  label={this.state.editImageFileName ? this.state.editImageFileName : this.state.editData.image} onChange={this.onEditImageFileChange}/>
                        <TextField inputRef={penyusun => this.penyusun = penyusun} defaultValue={this.state.editData.prnyusun}  margin="dense" id="penyusun"  label="Penyusun Materi" type="text" fullWidth />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=>this.setState({openEdit: false, selectedEditKelasId:0})} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onBtnUpdateClick} color="primary">
                        Update
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default ManageKelas;