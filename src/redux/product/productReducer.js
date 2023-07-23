import { ADD_MANY_QUANTITY, ADD_PRODUCT, ADD_PRODUCT_QUANTITY, REMOVE_PRODUCT_QUANTITY } from "./actionTypes";

const initialState = [];

const nextProductsId = (products) =>{
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1)
    return maxId + 1;
};  

export const productReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case ADD_PRODUCT:
            return[
                ...state,
                {
                    id: nextProductsId(state),
                    ...action.payload
                }
            ] 

        case ADD_PRODUCT_QUANTITY:
            return[
                ...state.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1}: item)
            ];

        case REMOVE_PRODUCT_QUANTITY:
            if(action.payload.quantity <= 0){
                return state
            }
            else{
                return [
                    ...state.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity - 1}:item)
                ]
            }

        case ADD_MANY_QUANTITY: 
                return [
                    ...state.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + action.payload.cartQuantity}: item)
                ]

        default:
            return state;
    }
}