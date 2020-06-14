import {ADD_PRODUCT, UPDATE_CART, UPDATE_PRODUCT} from '../constants';

export function addProduct( id, title, price, image) {
    return {
        type: ADD_PRODUCT,
        payload: {
            id,
            title,
            price,
            image,
        }
    };
}

export function updateProducts( id, title, price) {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            id, title, price
        }
    };
}
export function updateCart(price) {
    return {
        type: UPDATE_CART,
        payload: price

    };
}
