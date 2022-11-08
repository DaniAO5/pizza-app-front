import React from 'react'
import cuponImagen from '../../images/cupon.png';
import './cuponesStyle.scss'

function Cupones() {
  return (
    <>
        <div className='cupones'>
            <img src={cuponImagen} alt="" />
            <img src={cuponImagen} alt="" />
            <img src={cuponImagen} alt="" />
            <img src={cuponImagen} alt="" />
        </div>
    </>
  )
}

export default Cupones;