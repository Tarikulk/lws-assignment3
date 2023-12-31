import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART } from "./actionTypes"

export const addToCart = (product) =>{
    return{
        type: ADD_TO_CART,
        payload: product
    };
};

export const removeToCart = (product) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: product,
    };
};

export const deleteToCart = (product) =>{
    return{
        type: DELETE_FROM_CART, 
        payload: product,
    };
};