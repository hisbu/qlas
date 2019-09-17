import {
    TRANSACTION_ADD,
    TRANSACTION_SUCCESS
} from './type'

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