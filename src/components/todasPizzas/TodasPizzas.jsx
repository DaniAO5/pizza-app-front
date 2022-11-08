import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './todasPizzasStyle.scss'
import Cupones from "../cupon/Cupones";

const TodasPizzas = () =>{
    const navigate = useNavigate();
    const pizzas = JSON.parse(sessionStorage.getItem('pizzas'));

    const [mostrarPizzas, setMostrarPizzas] = useState(true);

    const pizzaIndividual = (indice) =>{
        console.log(indice);
        navigate(`/pizza/${indice}`)
    }

    return(
        <>
            <div className="todas2">
                <div className="todas2__letras"><strong>Pizzas disponibles</strong></div>
                <div className="todas2__funcion" onClick={()=>setMostrarPizzas(!mostrarPizzas)}>Ver todas</div>
            </div>
            <Cupones/>
            <div className={mostrarPizzas ? "todasHidden" : "todas"}>{
                pizzas.map((elemento,indice)=>{
                    return(
                        
                            <div key={indice} className="todas" onClick={()=>pizzaIndividual(indice)}>

                            
                            <div className="todas__abajo" style={{ backgroundImage: `url(${elemento.imagen})` }}>
                                <div className="todas__abajo__card" >
                                    <div className="todas__abajo__card__img" ></div>
                                    
                                    <div className="todas__abajo__card__abajo">
                                        <div className="todas__abajo__card__abajo__nombre">{`${elemento.name}`}</div>
                                        <div className="todas__abajo__card__abajo__precio"><p className="todas__abajo__card__abajo__precio__contenedor">{`$${elemento.precio} COP`}</p></div>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                        
                    )
                })
            }
                
            </div>
        </>
    )
}

export default TodasPizzas;