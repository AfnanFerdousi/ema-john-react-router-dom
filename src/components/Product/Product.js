import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='fs-5'>Price: <span className='text-warning fw-bold'>${price}</span></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart py-3'>
                Add to Cart <FontAwesomeIcon className='ms-2' icon={faShoppingCart}></FontAwesomeIcon>        
            </button>
        </div>
    );
};

export default Product;