import React from 'react';
import Form from './Product/Form';
import { useSelector } from 'react-redux';
import Products from './Product/Products';

const HomePage = () => {

    const products = useSelector((state) => state.products);

    return (
        <>
            <div className="productWrapper">
                <div className="productContainer" id="lws-productContainer">
                    {products.length >= 1 ? products.map(item=><Products key={item.id} product={item} />) :
                    "No product found"
                    }
                
                </div>
                <Form></Form>
            </div>
        </>
    );
};

export default HomePage;