import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../../hooks/UseProducts';
import { addToDb, getStoredCart, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts()   
    const [cart, setCart] = useState([]);

    // useEffect( () =>{
    //     fetch('products.json')
    //     .then(res=> res.json())
    //     .then(data =>setProducts(data))
    // }, []);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleClearCart = (savedCart) =>{
        const clear = []
        setCart(clear);
        deleteShoppingCart(savedCart)
    }

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>                         
                </Cart>    
                <div className='px-3'>
                <Link to="/orders">
                    <button className='btn btn-success w-100 '>
                        Review Orders <FontAwesomeIcon className='ms-2' icon={faShoppingCart}/>
                    </button>
                </Link>
                </div>                    
            </div>
            
        </div>
    );
};

export default Shop;