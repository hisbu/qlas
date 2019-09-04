import React, {Component} from 'react'
import Elon from '../../supports/img/elon-musk.jpg'


class ProfilePage extends Component{
    render(){
        return(
            <div id='profilePage' className='container radiusatas radiusbawah'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='photoBox '>
                                <img src={Elon} alt='photoProfile' className='center'/>
                            </div>
                        </div>
                        <div className='col-9 detailProfile'>
                            <div className='titleProfile'>User Name:</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='titleProfile'>Email</div>
                            <input type='text' defaultValue='hisbu@yahoo.com'/><br/>
                            <div className='titleProfile'>First Name:</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='titleProfile'>last Name:</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='titleProfile'>Alamat</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='titleProfile'>gender</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='titleProfile'>User Name:</div>
                            <input type='text' defaultValue='hisbu'/><br/>
                            <div className='profileEmail'>hisbu@yahoo.com</div>
                            <div className='profileFirstname'></div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ProfilePage;