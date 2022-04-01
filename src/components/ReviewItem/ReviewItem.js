import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props;
    const {name,img,price,shipping,quantity} = product;
    return (
        <div className='review-items container'>
            <img className='item-img' src={img} alt=""></img>
            <div className='new-product-info'>
                <div className='review-items-details'>
                    <p className='product-name' title={name}>
                        {name.length > 20? name.slice(0,20) + '...' : name}
                    </p>
                    <p>Price: <span className='text-colour'>${price}</span></p>
                    <p><small>Shipping Price: <span className='text-colour'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='text-colour'>{quantity}</span></small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => {handleRemoveProduct(product)} } className='delete-btn'>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;