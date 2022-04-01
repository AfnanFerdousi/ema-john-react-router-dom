import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Orders.css'
import useProducts from '../../hooks/UseProducts'
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';

const Orders = () => {
    const [products, setProduct] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) =>{
        console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);

        setCart(rest);
        removeFromDb(product.id)

    }

    const handleClearCart = (savedCart) =>{
        const clear = []
        setCart(clear);
        deleteShoppingCart(savedCart)
    }
    return (
        <div className='new-shop-container container'>
            <div className='row gx-5'>
            <div className="items-container my-4 col-md-7">
                {
                    cart.map(product=><ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container my-5 col-md-5">
                <Cart cart={cart} handleClearCart={handleClearCart}>                  
                </Cart>
                <div className='px-3 '>
                <Link to="/checkout">
                    <button className='btn btn-success w-100 '>
                        Proceed to Checkout <FontAwesomeIcon className='ms-2' icon={faArrowRight}/>
                    </button>
                </Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Orders;