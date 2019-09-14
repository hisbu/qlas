import {PAKET_INIT, SELECTED_PAKET} from './type'
import Axios from 'axios'
import { API_URL } from '../../helpers'

export const paketInit = ()=>{
    return(dispatch) => {
        Axios.get(`${API_URL}/paket/getPaket`)
        .then((res)=>{
            dispatch({
                type: PAKET_INIT,
                payload: res.data
            })
        }).catch((err)=>{
            console.log(err)
        })       
    }
}

export const selectedPaket = (paket)=>{
    return{
        type: SELECTED_PAKET,
        payload: paket
    }
}