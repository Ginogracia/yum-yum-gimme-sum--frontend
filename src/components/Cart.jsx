import './styling/Cart.scss'
import cartIcon from '../assets/cart-icon.svg'
import logoTransparent from '../assets/logo-transparent.svg'
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { sendCartToApi } from '../redux/orderMakerSlice';
import { useNavigate } from "react-router-dom";

const Cart = () => {

        const [isHidden, setIsHidden] = useState(true);


        const cartItems = useSelector((state) => state.cart.cartItems);  
        const cartCount = cartItems.length;
        const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleRemoveFromCart = (id) => {
            dispatch(removeFromCart(id));
        };




        const handleOrderPlacement = async () => {
            if (cartItems.length === 0) {
                return;
            }
    
            console.log("Cart items on checkout:", cartItems);
    
            try {

                const result = await dispatch(sendCartToApi()).unwrap(); 
    
                console.log("Order placed successfully:", result);

                navigate('/eta', { state: { orderData: result.order } });

                dispatch(clearCart())

            } catch (error) {
                console.log("Error placing order:", error);
            }
        };

    return(
        <>

        <button className='cart-button' onClick={() => setIsHidden(!isHidden)}>
                <img className='cart-icon' src={cartIcon}></img>
            <div className='notification-container'>
                <p className='notification-amount'>{cartCount}</p>
            </div>
        </button>



        <section className={`cart-background ${isHidden ? "hidden" : ""}`} >


            <section className='cart-list-container'>

                {cartItems.map((item) => (

                <section className='cart-item' key={item.id} onClick={() => handleRemoveFromCart(item.id)}>
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-dot-divier'>.....</p>
                    <p className='cart-item-price'>{item.price} SEK</p>
                </section>

                ))}

            </section>

            <section className='cart-total'>
                <p className='total-text'>TOTALT</p>
                <p className='total-amount'>{totalPrice} SEK</p>
            </section>

            <button className='checkout-button' onClick={handleOrderPlacement}>TAKE MY MONEY!</button>


        </section>
        </>
    )
}


export default Cart