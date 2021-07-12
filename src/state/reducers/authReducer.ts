import { AnyAction } from 'redux';
import { AuthType } from '../actions/authActions';

const initialState = {
    isLoggedIn: false,
    id: '',
    name: '',
    surname: '',
    email: '',
    img: '',
    error: ''

};

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case AuthType.LOGIN_SUCCESS: {
            return {
                ...state,
                id: action.payload.LS,
                name: action.payload.uU,
                surname: action.payload.qS,
                email: action.payload.Nt,
                img: action.payload.DJ,
                isLoggedIn: true,
                
            };
        }
        case AuthType.LOGIN_FAIL: {
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false
            };
        }
        case AuthType.LOGOUT_SUCCESS: {
            return {
                ...initialState,              
            };
        }
        case AuthType.LOGOUT_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }
    }
    return state;
}