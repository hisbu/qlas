import {
    TRANSACTION_ADD,
    TRANSACTION_FAIL,
    TRANSACTION_SUCCESS
} from './type'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import moment from 'moment'

export const checkUot = (userId, paketId, harga)=>{
    return (dispatch) => {
        dispatch({ 
            type    : TRANSACTION_ADD,
            payload : {
                userId,
                paketId
            }
        })
        var date = moment().format("YYYY-MM-DD h:mm:ss")
        Axios.post(API_URL+ '/transaction/checkOut',{
            userId, paketId, harga, date
        }).then((res)=>{
            console.log(res)
        })
        
    }
}