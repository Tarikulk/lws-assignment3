import React from 'react';
import "../style.css"
import { useDispatch } from 'react-redux';
import { addToCart, deleteToCart, removeToCart } from '../../redux/cart/actions';

const ProductsCart = ({product}) => { 

  const { cartQuantity, productName, image, price, category} = product;

  const total = cartQuantity * price;

  const dispatch = useDispatch();

  const addToCartHandler = () =>{
    dispatch(addToCart(product))
  };

  const removeTocartHandler = () =>{
    dispatch(removeToCart(product))
  }

  const deleteToCartHandler = () =>{
    dispatch(deleteToCart(product))
  }



    return (
              <>
              {/* <!-- Cart Item --> */}
              <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                <img class="lws-cartImage" src={image} alt={productName} />
                  {/* <!-- cart item info --> */}
                  <div className="space-y-2">
                    <h4 className="lws-cartName">{productName}</h4>
                    <p className="lws-cartCategory">{category}</p>
                    <p>BDT <span className="lws-cartPrice">{price}</span></p>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                  {/* <!-- amount buttons --> */}
                  <div className="flex items-center space-x-4">
                    <button onClick={addToCartHandler} className="lws-incrementQuantity">
                      <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{cartQuantity}</span>
                    <button onClick={removeTocartHandler} className="lws-decrementQuantity">
                      <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                  </div>
                  {/* <!-- price --> */}
                  <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{total}</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                  <button onClick={deleteToCartHandler} className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              {/* <!-- Cart Items Ends --> */}
    
    
            {/* <!-- Bill Details --> */}
              </>
    );
};

export default ProductsCart;