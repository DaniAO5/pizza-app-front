import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../../routes/Router.jsx'
import './footerPizzaStyle.scss'
import Swal from "sweetalert2";
import Footer from "../../footer/Footer.jsx";

function FooterPizza() {
    const navigate = useNavigate();
    const {NumeroPizzas} = useContext(AppContext);
    const {contador,setContaddor} = useContext(AppContext);

    console.log(NumeroPizzas);
    console.log(contador);

    // const [contador,setContaddor]=useState(0);

    const sumaF = () =>{
        setContaddor(contador + 1);
        if(contador == NumeroPizzas){
            setContaddor(NumeroPizzas[0]);
        }
    }
    const restaF = () =>{
        setContaddor(contador - 1);
        if(contador == 0){
            setContaddor(0);
        }
    }

    const pagarF = (cantidad) =>{
        console.log(cantidad.contador);
        if(cantidad.contador==0){
            Swal.fire(
                'upps',
                'No has seleccionado la pizza que quieres!',
                'error'
              )
        }else{
            navigate(`/compra`)
        }
    }

  return (
    <>
        <div className='footerPizza'>
            <div className='footerPizza__contador'>
                <div className='footerPizza__contador__resta'onClick={()=>restaF()}>-</div>
                <div className='footerPizza__contador__numero'>{contador}</div>
                <div className='footerPizza__contador__suma' onClick={()=>sumaF()}>+</div>
            </div>
            <div className='footerPizza__papelera'>
                <p className='footerPizza__papelera__numero'>{contador}</p>
                <img src="https://cdn-icons-png.flaticon.com/512/1007/1007722.png" alt="" className='footerPizza__papelera__img'/>               
            </div>
            <div className='footerPizza__pagar' onClick={()=>pagarF({contador})}>
                <p className='footerPizza__pagar__letra'>Pagar</p>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default FooterPizza