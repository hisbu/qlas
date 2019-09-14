import {
    TRANSACTION_ADD,
    TRANSACTION_FAIL,
    TRANSACTION_SUCCESS
} from '../actions/type'

const INITIAL_STATE = {
    loading: false,
    userId:'',
    paketId:'',
    error:'',
    message:''
}

export default  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TRANSACTION_ADD:
            return {...INITIAL_STATE, ...action.payload, loading: true}
        case TRANSACTION_SUCCESS:
            return {...INITIAL_STATE, loading : false}
        case TRANSACTION_FAIL:
            return {...INITIAL_STATE, loading: false, error: action.payload}
        default:
            return state
    }
}