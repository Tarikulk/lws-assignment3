import React from 'react';
import { useDispatch } from "react-redux";
import "../style.css"
import { addProduct } from '../../redux/product/actions';

const Form = () => {

    const dispatch = useDispatch();
 
    const handleSubmit = (e) =>{
      e.preventDefault()
      const form = e.target
      const productName = form.product.value;
      const category = form.category.value;
      const image = form.image.value;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const products = {
        productName, 
        category,
        image, 
        price, 
        quantity, 
      }
      dispatch(addProduct(products))
    }

    return (
        <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input name='product' className="addProductInput" id="lws-inputName" type="text" required />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input name='category' className="addProductInput" id="lws-inputCategory" type="text" required />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input name='image' className="addProductInput" id="lws-inputImage" type="text" required />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input name='price' className="addProductInput" type="number" id="lws-inputPrice" required />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input name='quantity' className="addProductInput" type="number" id="lws-inputQuantity" required />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
        </form>
      </div>
    );
};

export default Form;