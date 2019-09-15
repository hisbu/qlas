import {
    TRANSACTION_ADD,
    TRANSACTION_FAIL,
    TRANSACTION_SUCCESS
} from './type'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import moment from 'moment'

export const checkUot = (userId, paketId, harga)=>{
    return{
        type: TRANSACTION_ADD
    }
}

export const transaction = (transData) =>{
    return{
        type: TRANSACTION_SUCCESS,
        payload: transData
    }
}