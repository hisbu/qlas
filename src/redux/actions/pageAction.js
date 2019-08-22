import {PAGE_POSITION} from './type'

export const pagePosition = (position)=>{
    return{
        type: PAGE_POSITION,
        payload: position
    }
}