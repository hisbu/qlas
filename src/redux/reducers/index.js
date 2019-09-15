import { combineReducers} from 'redux'
import PageReducer from './pageReducer'
import AuthReducer from './authReducer'
import KelasReducer from './kelasReducers'
import PaketReducer from './paketReducer'
import TransReducer from './transactionReducer'


export default combineReducers({
    page: PageReducer,
    auth: AuthReducer,
    kelas: KelasReducer,
    paket: PaketReducer,
    transaksi: TransReducer

})