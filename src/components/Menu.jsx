import './styling/Menu.scss'
import menuBackgroundOverlay from '../assets/menu-background-overlay.png'
import logoTransparent from '../assets/logo-transparent.svg'
import cartIcon from '../assets/cart-icon.svg'
import React, { useState, useEffect } from "react";
import menuGetter from './menuGetter.jsx';
import Cart from './Cart.jsx'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";







const Menu = () => {

    const dispatch = useDispatch();
 
    const handleAddToCart = (item) => {
        
        const newItem = {
          name: item.name,
          price: item.price,
          itemType: item.id
        };

        dispatch(addToCart(newItem));

    };




    
    const [wontonItems, setWontonItems] = useState([]);
    const [dipItems, setDipItems] = useState([]);
    const [drinkItems, setDrinkItems] = useState([]);
   
        useEffect(() => {
            const fetchMenu = async () => {
        
               const menuList = await menuGetter()
               

               const wonton = menuList.filter(item => item.type === "wonton");
               const dip = menuList.filter(item => item.type === "dip");
               const drink = menuList.filter(item => item.type === "drink");

               setWontonItems(wonton);
               setDipItems(dip);
               setDrinkItems(drink);
        
            };
        
            fetchMenu();
          }, []);


    return(
        <>
        
        
        
        <section className='background'>
            <section className='menu-background'>
            
                <img className='menu-background-overlay' src={menuBackgroundOverlay}></img>
                <img className='logo-small' src={logoTransparent}></img>¨
                <Cart />
                

                <section className='menu-section'>

                    <h2 className='menu-header'>MENY</h2>

                    <section className='products-container'>
                        <section className='list-title-container'>

                            <p className='list-title'>Wontons</p>

                        </section>
                    {wontonItems.map((item) => (
                        <section className='menu-item-container' key={item.id} onClick={() => handleAddToCart(item)}>

                            <p className='item-name'>{item.name}</p>
                            <p className='item-price'>{item.price} SEK</p>
                            <p className='item-desc'>{item.description}</p>

                        </section>
                     ))} 


                    <section className='list-title-container'>

                        <p className='list-title'>Drickor</p>

                    </section>
                     {drinkItems.map((item) => (
                     <section className='menu-drink-container' key={item.id} onClick={() => handleAddToCart(item)}>
                            
                            <p className='item-name'>{item.name}</p>
                            <p className='item-price'>{item.price} SEK</p>
                            <p className='item-desc'>{item.description}</p>

                     </section>
                     ))} 

                     <section className='menu-dip-container'>

                            <p className='item-name'>DIPSÅS</p>
                            <p className='item-price'>19 SEK</p>

                            
                            <section className='dip-selector-container'>
                            {dipItems.map((item) => (
                                <button className='dip-button' key={item.id} onClick={() => handleAddToCart(item)}>
                                    <p className='dip-name'>{item.name}</p>
                                </button>
                            ))} 
                            </section>
                            

                     </section>




                    </section>



                </section>


            </section>

            

        </section>
        
        
        
        </>
    )
}


export default Menu