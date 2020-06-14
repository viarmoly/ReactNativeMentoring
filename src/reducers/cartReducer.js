import {ADD_PRODUCT, UPDATE_CART, UPDATE_PRODUCT} from '../constants';

const initialState = {
    cart: {
        price: 0,
        qty:0
    }

};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            return {
            ...state,
                [action.payload.id]: {
                title: action.payload.title,
                price: action.payload.price,
                qty: 1,
                image: action.payload.image,
            }
            }
        }
        case UPDATE_PRODUCT: {
            return {
                ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                    price: action.payload.price,
                    qty: state[action.payload.id].qty + 1
                }}
        }
        case UPDATE_CART:{
            return {
                ...state,
                cart:{
                    price: state.cart.price + action.payload,
                    qty: state.cart.qty + 1,
                }
            }
        }
        default:
        return state;
    }
};

export default cartReducer;
