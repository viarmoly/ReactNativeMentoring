import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from '../constants';

export function onSignIn(token) {
    return {
        type: SIGN_IN,
        payload: token
    };
}

export function onSignOut() {
    return {
        type: SIGN_OUT
    };
}

export function restoreUserToken(token) {
    return {
        type: RESTORE_TOKEN,
        payload: token
    };
}
