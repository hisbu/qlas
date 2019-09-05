import React, {Component} from 'react'
import Elon from '../../supports/img/elon-musk.jpg'
import {BtnBgQcolor} from '../../component/btnQlas'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import { connect } from 'react-redux'
import LoadingPage from '../loadingPage'

class ProfilePage extends Component{
    state = {
        userData: null,
        disabled: true
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        console.log(this.props.username)
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

    onBtnEditClick = () => {
        document.getElementsByClassName('titleProfile').disabled = true
        alert('masuk')
    }
    render(){
        if(this.state.userData === null) {
            return <LoadingPage/>
        }
        return(
            <div className='radiusatas radiusbawah profilePage'>
                    {/* <div className='bgProfile radiusatas'>

                    </div> */}
                    <div className='radiusatas contentBox radiusbawah'>
                            <div className='photoBox '>
                                <img src={Elon} alt='photoProfile' className='center'/>
                            </div>
                        <div className='detailProfile'>
                            <h3>User Profile</h3>
                            <div className='titleProfile'>User Name:</div>
                            <input type='text' defaultValue={this.state.userData.username} disabled/><br/>
                            <div className='titleProfile'>Email</div>
                            <input type='text' defaultValue={this.state.userData.email}/><br/>
                            <div className='titleProfile'>First Name:</div>
                            <input type='text' defaultValue={this.state.userData.firstName}/><br/>
                            <div className='titleProfile'>last Name:</div>
                            <input type='text' defaultValue={this.state.userData.lastName}/><br/>
                            <div className='titleProfile'>Alamat</div>
                            <input type='text' defaultValue={this.state.userData.address}/><br/>
                            <div className='titleProfile'>gender</div>
                            <input type='text' defaultValue={this.state.userData.gender}/><br/>
                            <div className='titleProfile'>Phone Number</div>
                            <input type='text' defaultValue={this.state.userData.phone}/><br/>
                        </div>
                        <div style={{marginTop:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <BtnBgQcolor title={'Update Profile'}/><BtnBgQcolor title={'Edit Profile'} onClick={this.onBtnEditClick}/>

                        </div>

                        {/* -====== update password =======- */}
                        <div className='detailProfile' style={{marginTop:'2em'}}>
                            <hr/>
                            <h3>Change Password</h3>    
                            <div className='titleProfile'>Old Password</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='titleProfile'>New Password</div>
                            <input type='text' defaultValue='hisbu@yahoo.com'/><br/>
                            <div className='titleProfile'>Confirm Password</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                        </div>
                        <div style={{marginTop:'1em', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <BtnBgQcolor title={'Change Password'}/>

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
        username    : state.auth.username
    }
  }
export default connect(mapStateToProps) (ProfilePage);