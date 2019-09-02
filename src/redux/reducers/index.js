import { combineReducers} from 'redux'
import PageReducer from './pageReducer'
import AuthReducer from './authReducer'

export default combineReducers({
    page: PageReducer,
    auth: AuthReducer

})