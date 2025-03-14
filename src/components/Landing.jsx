import './styling/Landing.scss'
import logo from '../assets/logo.png'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";





const Landing = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("click", routeToMenu);

    return () => {
        document.removeEventListener("click", routeToMenu);
    };
}, []);



    function routeToMenu() {
       navigate('/menu');
    }




    return (
        <>
        <section className='background'>
        <section className='landing-container'>

            <img alt='Our logo.' className='logo-img' src={logo}></img>


        </section>
        </section>
        </>
    )

}

export default Landing