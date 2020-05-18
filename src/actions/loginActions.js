import { IS_LOGIN, IS_LOGOUT } from '../constants';

export function onLogin() {
    return {
        type: IS_LOGIN
    };
}

export function onLogout() {
    return {
        type: IS_LOGOUT
    };
}
