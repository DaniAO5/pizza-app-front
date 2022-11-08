import React from 'react'
import Header from '../header/Header'
import axios from 'axios';
import { useState } from 'react';
import './comprasrealizadas.scss'

function ComprasRealizadas() {
    const [productoss,setProductoss] = useState({});
    const [mostrar,setMostrar] = useState(true);
    const URL_API = "https://pizzaback-production.up.railway.app/compras";
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(usuario.id);
    const productosComprados = async() =>{
        const URLProductos = `${URL_API}?usuario=${usuario.id}`
        const productos = await axios.get(URLProductos);
        const datos = productos.data;
        console.log(datos);
        setProductoss(datos);
        setMostrar(!mostrar);
    }
    console.log(productoss)
  return (
    <>
        <div className='comprasRealizadas'>
            <Header />
            <div className='comprasRealizadas__letra' onClick={()=>productosComprados()}>
                <p className='comprasRealizadas__letra__contenedor'>Mostrar compras</p>
            
            </div>
            <div className={mostrar ? 'listaProductosHidden':'comprasRealizadas__listaProductos'}>
                <div className='comprasRealizadas__listaProductos__imagen'>
                    <img src={productoss.imagen} alt="" className='comprasRealizadas__listaProductos__imagen__img'/>
                </div>
                <div className='comprasRealizadas__listaProductos__nombre'>
                    <p className='comprasRealizadas__listaProductos__nombre__letra'>{`${productoss.nombre}`}</p>
                </div>
                <div className='comprasRealizadas__listaProductos__cantidad'>
                    <p className='comprasRealizadas__listaProductos__cantidad__letra'>{`x${productoss.cantidad}`}</p>
                </div>
                <div className='comprasRealizadas__listaProductos__precio'>
                    <p className='comprasRealizadas__listaProductos__precio__letra'>{`$${productoss.precio} COP u`}</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ComprasRealizadas;