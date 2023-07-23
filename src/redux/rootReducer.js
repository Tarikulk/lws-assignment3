import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    carts: cartReducer
})