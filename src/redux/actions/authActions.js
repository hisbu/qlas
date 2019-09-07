import axios from 'axios';
import { 
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING,
    USER_LOGOUT,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS
} from './type';
import { API_URL } from '../../helpers';

export const onUserRegister = ({ username, email, password }) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING })
        if(username === '' || email === '' || password === '') {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua form diatas wajib diisi!' })
        }
        else {
            axios.post(API_URL + '/user/register', {
                username, email, password
            }).then((res) => {
                console.log(res)
                if(res.data.status === 'error') {
                    dispatch({ type: AUTH_SYSTEM_ERROR, payload: res.data.message })
                }
                else {
                    localStorage.setItem('username', username)
                    dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data })
                }
            }).catch((err) => {
                console.log(err);
                dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error' })
            })        
        }
    }
}

export const changePassword = ({username, oldPassword, newPassword, confirm}) => {
    console.log('======>', oldPassword, newPassword, confirm)
    return (dispatch) => {
        // dispatch({ type: AUTH_LOADING})
        if(oldPassword === '' || newPassword === '' || confirm === ''){
            dispatch({ type: CHANGE_PASSWORD, payload: 'Semua form harus diisi!'})
        }else if(newPassword !== confirm){
            dispatch({type: CHANGE_PASSWORD, payload: 'new password not match'})
        }
        else{
            
            axios.post(API_URL + '/user/changePassword', {username, oldPassword, newPassword, confirm})
            .then((res)=>{
                if(res.data.status === 'error') {
                    dispatch({ type: CHANGE_PASSWORD, payload: res.data.message })
                }else{
                    dispatch({type : CHANGE_PASSWORD_SUCCESS, payload: 'New Password Updated'})
                }
            })
        }
    }
}

export const onUserLogin = ({ email, password }) => {
    console.log(email,password)
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING })
        if(email === '' || password === '') {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua form diatas wajib diisi!' })
        }
        else {
            axios.post(API_URL + '/user/login', {
                email, password
            }).then((res) => {
                console.log(res)
                if(res.data.status !== 'error') {
                    // console.log(res.data.token)
                    localStorage.setItem('token', res.data.token)
                    dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data })
                } else {
                    dispatch({ type: AUTH_SYSTEM_ERROR, payload: res.data.message })
                }
                
            }).catch((err) => {
                console.log(err);
                dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error kesini' })
            })        
        }
    }
}

export const keepLogin = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        console.log(token)
        const headers = {
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        }
        console.log(headers)
        axios.post(API_URL + '/user/keeplogin',{}, headers)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data })
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
            localStorage.removeItem('token')
            dispatch({
                type: USER_LOGOUT
            })
        })
    }
}

export const onUserLogout = () => {
    localStorage.removeItem('token')
    return {
        type: USER_LOGOUT
    }
}