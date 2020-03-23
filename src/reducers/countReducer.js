import { FOO_CHANGE } from '../constants';
const initialState = {
    count: 0
};
const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOO_CHANGE:
            return {
                ...state,
                count:action.payload
            };
        default:
            return state;
    }
};

export default countReducer;
