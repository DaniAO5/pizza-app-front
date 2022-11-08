import React from 'react'
import { useNavigate } from "react-router-dom";
import './compraListaStyle.scss'

function CompraLista() {
    const navigate = useNavigate();

    const regreso = () =>{
        navigate('/home');
    }

  return (
    <>
        <div className='compraLista'>
            <div className='compraLista__animacion'>
                <img src="https://i.pinimg.com/originals/80/c9/53/80c9530465d5469f629f529a48a1afdf.gif" alt="" className='compraLista__animacion__gif'/>
            </div>
            <div className='compraLista__pedido'>
                <b>Tú pedido esta en proceso</b>
            </div>
            <div className='compraLista__notificacion'>
                <div>Serás notificado cuando llegue el repartidor.</div>
            </div>  
            <div className='compraLista__boton'>
                <div className='compraLista__boton__div' onClick={()=>regreso()}>Aceptar</div>
            </div>
        </div>
    </>
  )
}

export default CompraLista