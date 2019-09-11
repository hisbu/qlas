import {
    KELAS_INIT
} from '../actions/type'

const INITIAL_STATE = {
    kelasData: null
}

export default  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case KELAS_INIT:
            return {...INITIAL_STATE, kelasData: action.payload}
        default:
            return state
    }
}
