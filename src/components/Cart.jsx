import './styling/Cart.scss'
import cartIcon from '../assets/cart-icon.svg'
import logoTransparent from '../assets/logo-transparent.svg'
import React, { useState, useEffect } from "react";

const Cart = () => {

const [isHidden, setIsHidden] = useState(true);








    return(
        <>

<button className='cart-button' onClick={() => setIsHidden(!isHidden)}>
                <img className='cart-icon' src={cartIcon}></img>
            <div className='notification-container'>
                <p className='notification-amount'>6</p>
            </div>
        </button>



        <section className={`cart-background ${isHidden ? "hidden" : ""}`} >









        </section>
        </>
    )
}


export default Cart