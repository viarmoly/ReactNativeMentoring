import { SIGN_IN, SIGN_OUT, RESTORE_TOKEN } from '../constants';

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: action.payload,
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
        case RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default loginReducer;
