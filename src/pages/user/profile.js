import React, {Component} from 'react'
// import Elon from '../../supports/img/elon-musk.jpg'
// import {BtnBgQcolor} from '../../component/btnQlas'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import { connect } from 'react-redux'
import LoadingPage from '../loadingPage'
import { changePassword } from '../../redux/actions/authActions'

class ProfilePage extends Component{
    state = {
        userData: null,
        editImageFileName: '',
        editImageFile: undefined
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        // console.log(this.props.username)
        const headers = {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        }
        
        Axios.get(`${API_URL}/user/getCurrentUser/`+this.props.username, headers)
        .then((res)=>{
            console.log(res.data[0])
            this.setState({userData: res.data[0]})
        }).catch((err)=>{
            console.log(err)
        })
    }

    componentDidUpdate(){
        console.log(this.state.editImageFileName)
        console.log(this.state.editImageFile)
        console.log(this.state.username)
    }

    onEditImageFileChange = (e) => {
        if(e.target.files[0]) {
            this.setState({ editImageFileName: e.target.files[0].name, editImageFile: e.target.files[0]})
        }
        else {
            this.setState({ editImageFileName: '', editImageFile: undefined })
        }

        console.log(this.state.editImageFile)
        // console.log(this.state.editImageFileName)
    }

    renderError = () => {
        
        if(this.props.error.length > 0) {
            console.log('masuk disini error ====> ', this.props.error)
            return <div className="alert alert-danger">{this.props.error}</div>;
        } 
        
        if(this.props.message.length > 0){ 
            console.log('masuk disini message ====> ', this.props.message)
            return <div className="alert alert-success">{this.props.message}</div>;

        }
    }

    onBtnUpdateProfileClick = () => {
        var formData = new FormData()
        const token = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }
        
        var data = {
            firstName   : this.refs.firstName.value,
            lastName    : this.refs.lastName.value,
            address     : this.refs.address.value,
            gender      : this.refs.gender.value,
            phone       : this.refs.phone.value
        }

        formData.append('image', this.state.editImageFile)
        formData.append('data', JSON.stringify(data))

        Axios.put(`${API_URL}/user/editUser/${this.refs.username.value}`, formData, headers)
        .then((res)=>{
            this.setState({userData: res.data})
        }).catch((err)=>{
            console.log(err)
        })

        console.log(formData)
    }

    onBtnChangePassClick = () => {
        var oldPassword = this.refs.oldPassword.value
        var newPassword = this.refs.newPassword.value
        var confirm     = this.refs.confirm.value
        var username    = this.props.username

        this.props.changePassword({username, oldPassword, newPassword, confirm})
    }
    render(){
        if(this.state.userData === null) {
            return <LoadingPage/>
        }
        console.log(this.state.userData)
        return(
            <div className='radiusatas radiusbawah profilePage'>
                    {/* <div className='bgProfile radiusatas'>

                    </div> */}
                    <div className='radiusatas contentBox radiusbawah'>
                            <div className='photoBox '>
                                <img src={`${API_URL}${this.state.userData.image}`} alt='photoProfile' className='center'/>
                            </div>
                            <div class="fileUpload">
                                <span>Ubah Foto</span>
                                <input type="file" class="upload" label={this.state.editImageFileName} onChange={this.onEditImageFileChange}/>
                            </div>
                        <div className='detailProfile'>
                            <h3>Profil Pengguna</h3>
                            <div className='titleProfile'>Nama user:</div>
                            <input ref='username' type='text' defaultValue={this.state.userData.username} disabled/><br/>
                            <div className='titleProfile'>Email</div>
                            <input type='text' defaultValue={this.state.userData.email}/><br/>
                            <div className='titleProfile'>Nama Depan:</div>
                            <input ref='firstName' type='text' defaultValue={this.state.userData.firstName}/><br/>
                            <div className='titleProfile'>Nama Belakang:</div>
                            <input ref='lastName' type='text' defaultValue={this.state.userData.lastName}/><br/>
                            <div className='titleProfile'>Alamat</div>
                            <input ref='address' type='text' defaultValue={this.state.userData.address}/><br/>
                            <div className='titleProfile'>Jenis Kelamin</div>
                            <input ref='gender' type='text' defaultValue={this.state.userData.gender}/><br/>
                            <div className='titleProfile'>No. Telpon</div>
                            <input ref='phone' type='text' defaultValue={this.state.userData.phone}/><br/>
                        </div>
                        <div style={{marginTop:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <input type='button' className='btnBgQcolor' value='Simpan Perubahan' onClick={this.onBtnUpdateProfileClick}/>
                        </div>

                        {/* -====== update password =======- */}
                        <div className='detailProfile' style={{marginTop:'2em'}}>
                            <hr/>
                            <h3>Ubah Kata Sandi</h3>    
                            <div className='titleProfile'>Password Lama</div>
                            <input ref='oldPassword' type='password' placeholder='*******'/><br/>
                            <div className='titleProfile'>Password Baru</div>
                            <input ref='newPassword' type='password' placeholder='*******'/><br/>
                            <div className='titleProfile'>Konfirmasi Password</div>
                            <input ref='confirm' type='password' placeholder='*******'/><br/>
                        </div>
                        {this.renderError()}
                        <div style={{marginTop:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <input type='button' className='btnBgQcolor' value='Ubah Password' onClick={this.onBtnChangePassClick}/>

                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        position    : state.page,
        token       : state.auth.token, 
        authChecked : state.auth.authChecked,
        username    : state.auth.username,
        error       : state.auth.error,
        message     : state.auth.message
    }
  }
export default connect(mapStateToProps, {changePassword}) (ProfilePage);