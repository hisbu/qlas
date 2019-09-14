import {
    PAKET_INIT,
    SELECTED_PAKET
} from '../actions/type'

const INITIAL_STATE = {
    paket:'',
    selectedPaket:''
}

export default(state = INITIAL_STATE, action)=>{
    switch(action.type){
        case PAKET_INIT:
            return {...INITIAL_STATE, paket: action.payload}
        case SELECTED_PAKET:
            return {...state, selectedPaket: action.payload}
        default:
            return state
    }
}