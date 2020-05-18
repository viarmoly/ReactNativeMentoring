import { IS_LOGIN, IS_LOGOUT } from '../constants';

const initialState = {
    isLoggedIn: false,
    count:0
};

const loginReducer = (state =initialState, action) => {
    switch(action.type) {
        case IS_LOGIN:
            return {
                ...state,
                isLoggedIn: true
            };
        case IS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
};

export default loginReducer;
