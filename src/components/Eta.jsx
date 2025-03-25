import './styling/Eta.scss'
import logoTransparent from '../assets/logo-transparent.svg'
import wontonBox from '../assets/box.png'
import logo from '../assets/logo.png'
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import receiptGetter from './receiptGetter.jsx'


const Eta = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const orderData = location.state?.orderData;
    const [showReceipt, setShowReceipt] = useState(false);
    const [receipt, setReceipt] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    
    function routeToMenu() {
        navigate('/menu');
     }
     
     const formatLocalTime = (utcTimestamp) => {
        if (!utcTimestamp) return "N/A"; 

        const date = new Date(utcTimestamp); 
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }); 
    };

    const getReceipt = async (orderNumber) => {

        const receipt = await receiptGetter(orderNumber);

        setReceipt(receipt.receipt);
        setShowReceipt(true)
        setTotalPrice(receipt.receipt.orderValue);  

        
    }



    return (
        <>
        <section className='background'>
        <section className='eta-background'>


        {showReceipt && (
            <section className='receipt-container'>
                <img className='receipt-logo' src={logo}></img>
                <p className='receipt-header'>KVITTO</p>
                <p className='receipt-ordernumber'>#{receipt.id}</p>

                <section className='receipt-item-container'>

                {receipt.items.map((item) => (
                    <section className='receipt-item' key={item.id}>
                        <p className='receipt-item-name'>{item.name}</p>
                        <p className='receipt-item-dot-divider'>..........</p>
                        <p className='receipt-item-price'>{item.price} SEK</p>
                        <p className='receipt-item-amount'>{item.quantity} stycken</p>
                    </section>
                ))}
                </section>

                <section className='receipt-total-section'>
                    <section className='receipt-total-header-section'>
                    <p className='receipt-total-header'>TOTALT</p>
                    <p className='receipt-total-subtext'>inkl 20% moms</p>
                    </section>
                    <p className='receipt-total'>{totalPrice} SEK</p>

                </section>

            </section>
        )}


            <img className='logo-small' src={logoTransparent}></img>

            <img className='wonton-box' src={wontonBox}></img>

            <p className='wonton-text'>DINA WONTONS<br />TILLAGAS!</p>

            <p className='eta-text'>ETA {formatLocalTime(orderData?.eta)}</p>

            <p className='order-number-text'>#{orderData?.id ?? "Ingen beställning gjord."}</p>


            <button className='new-order-button' onClick={routeToMenu}>GÖR EN NY BESTÄLLNING</button>
            {!showReceipt && (
                <button className='see-receipt-button' onClick={() => getReceipt(orderData?.id)}>SE KVITTO</button>
            )}


        </section>
        </section>
        </>
    )

}

export default Eta