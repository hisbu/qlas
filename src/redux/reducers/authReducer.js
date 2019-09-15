import { 
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING,
    USER_LOGOUT,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS
} from '../actions/type';

const INITIAL_STATE = { 
    id:'',
    username: '', 
    image:'',
    email: '', 
    status: '',  
    error: '', 
    message:'',
    token: '',
    authChecked: false,
    loading: false 
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS :
            return { ...INITIAL_STATE, ...action.payload, authChecked: true };
        case AUTH_SYSTEM_ERROR :
            return { ...INITIAL_STATE, error: action.payload, authChecked: true }
        case AUTH_LOADING :
            return { ...state, error: '', loading: true }
        case USER_LOGOUT :
            return { ...INITIAL_STATE, authChecked: false }
        case CHANGE_PASSWORD :
            return { ...state, error: action.payload}
        case CHANGE_PASSWORD_SUCCESS :
            return { ...state, message: action.payload, error: ''}
        default :
            return state;
    }
}