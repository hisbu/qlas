import {KELAS_INIT} from './type'

export const kelasInit = (kelasData)=>{
    return{
        type: KELAS_INIT,
        payload: kelasData
    }
}