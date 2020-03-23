import { FOO_CHANGE } from '../constants';
export function changeSmth(e) {
    return {
        type: FOO_CHANGE,
        payload: e
    }
}
