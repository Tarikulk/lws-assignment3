import {applyMiddleware, createStore} from "redux"
import { rootReducer } from "./rootReducer"
import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART } from "./cart/actionTypes";
import { addManyQuantity, addProductQuantity, removeProductQuantity } from "./product/actions";

const productManageMiddleware = (store) => (next) => (action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            store.dispatch(removeProductQuantity(action.payload))            
            return  next(action)

        case REMOVE_FROM_CART:
            store.dispatch(addProductQuantity(action.payload))
            return next(action)

        case DELETE_FROM_CART:
            store.dispatch(addManyQuantity(action.payload))
            return next(action)
    
        default:
            return next(action);
    }
}

export const store = createStore(rootReducer, applyMiddleware(productManageMiddleware))