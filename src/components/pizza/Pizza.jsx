import React, { useContext } from "react";
import { AppContext } from '../../routes/Router.jsx'
import { useParams } from 'react-router-dom';
import './pizzaStyle.scss'
import FooterPizza from './footer/FooterPizza';
import Footer from "../footer/Footer.jsx";

const Pizza = () => {
    const {NumeroPizzas} = useContext(AppContext);
    const {pizzaSeleccionada} = useContext(AppContext);
    const {paginaAtras} = useContext(AppContext);
    
    const pizzas = JSON.parse(sessionStorage.getItem('pizzas'));
   
    
    let {pizza} = useParams();
    // let params = useParams();
    paginaAtras.push(pizza);
    console.log(pizza);
    console.log(pizzas[pizza].reseñas.length);
    NumeroPizzas.push(pizzas[pizza].cantidad);
    console.log(NumeroPizzas);
    pizzaSeleccionada.push(pizzas[pizza]);
  return (
    <>         
        <div className='todas1'>        
            <div className="todas1__arriba" style={{ backgroundImage: `url(${pizzas[pizza].imagen})` }}>
                <div className="todas1__arriba__card" >
                    <div className="todas1__arriba__card__img" ></div>
                </div>
            </div>
            <div className='todas1__abajo'>
                <div className='todas1__abajo__nombre'>
                    {`${pizzas[pizza].name}`}
                </div>
                <div className='todas1__abajo__botones'>
                    <div className='todas1__abajo__botones__precio'>
                        <p className='todas1__abajo__botones__precio__contenedor'>{`$${pizzas[pizza].precio} COP`}
                        </p>
                    </div>
                    <div className='todas1__abajo__botones__resenas'>
                        <p className='todas1__abajo__botones__resenas__contenedor'>{`${pizzas[pizza].reseñas.length} Reviews`}</p>
                    </div>
                </div>
                <div className='todas1__abajo__descripcion'>
                    <p className='todas1__abajo__descripcion__letra'>Descripción</p>
                    <p className='todas1__abajo__descripcion__descripcion'>{`${pizzas[pizza].descripcion}`}</p>
                </div>
                <div className='todas1__abajo__resena'>
                    <div className='todas1__abajo__resena__imagen'><img src={`${pizzas[pizza].reseñas[0].imagen}`} alt="" className='todas1__abajo__resena__imagen__img'/></div>
                    <div className='todas1__abajo__resena__texto'>
                        <p className='todas1__abajo__resena__texto__nombre'>{`${pizzas[pizza].reseñas[0].nombre}`}</p>
                        <p className='todas1__abajo__resena__texto__resena'>{`${pizzas[pizza].reseñas[0].comensal1}`}</p>
                    </div>
                    <div className='todas1__abajo__resena__dias'>{`${pizzas[pizza].reseñas[0].dias}d ago`}</div>
                </div>
                

            </div>
            <FooterPizza />
        </div> 
    
    </>
  )
}



export default Pizza
