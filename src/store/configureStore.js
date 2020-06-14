import { createStore, combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import cartReducer from '../reducers/cartReducer';

const rootReducer = combineReducers(
    {
        cartReducer: cartReducer,
        login: loginReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
