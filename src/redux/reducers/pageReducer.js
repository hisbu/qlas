import {
    PAGE_POSITION
} from '../actions/type'

const INITIAL_STATE = ''

export default(state = INITIAL_STATE, action)=>{
    switch(action.type){
        case PAGE_POSITION:
            return action.payload
        default:
            return state
    }
}