import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AppContext } from '../../routes/Router.jsx'
import { useForm } from "react-hook-form";
import './compraStyle.scss'

function Compra() {
    const URL_API = "https://pizzaback-production.up.railway.app/compras";
    const navigate = useNavigate();
    const {contador} = useContext(AppContext);
    const {paginaAtras} = useContext(AppContext);
    const {comprasEchas} = useContext(AppContext);
    console.log(paginaAtras);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    console.log(contador);//este se borra al recargar, habria que solucionarlo con un array como ya se hizo en el pasado
    const {pizzaSeleccionada} = useContext(AppContext);
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const compraL = {
        nombre: pizzaSeleccionada[0].name,
        precio:pizzaSeleccionada[0].precio,
        cantidad: contador,
        imagen: pizzaSeleccionada[0].imagen,
        usuario: usuario.id
    };
    console.log(compraL);
    comprasEchas.push(compraL);
    console.log(pizzaSeleccionada);
    console.log(pizzaSeleccionada.imagen);

    const onSubmit = async(data) => {
        console.log(data);

        if(data){
            await axios.post(URL_API,compraL);
            navigate(`/compraLista`)
        }
       
        
      };
    const ValidateC = (value) => {
        if (value.length < 16) {
          return "Tarjeta no valida";
        } else if (value.length > 16) {
          return "Tarjeta no valida";
        } else {
          return true;
        }
      };

      const ValidateFv = (value) => {
        if (value.length < 4) {
          return "Fecha de vencimiento no valida";
        } else if (value.length > 4) {
          return "Fecha de vencimiento no valida";
        } else {
          return true;
        }
      };

      const ValidateCvv = (value) => {
        if (value.length < 3) {
          return "CVV no valida";
        } else if (value.length > 3) {
          return "CVV no valida";
        } else {
          return true;
        }
      };
      const volver = () =>{
        navigate(`/pizza/${paginaAtras[0]}`);
      }

  return (
    <>
        <div className='paginaCompras'>
            <div className='paginaCompras__devolver' onClick={()=>volver()}>
                <p className='paginaCompras__devolver__flecha'>{`<`}</p>
                <p className='paginaCompras__devolver__letras'><b>Carrito de compras</b></p>
            </div>
            <div className='paginaCompras__producto'>
                <div className='paginaCompras__producto__pizza'>
                    <img src={`${pizzaSeleccionada[0].imagen}`} alt="" className='paginaCompras__producto__pizza__img'/>
                </div>
                <div className='paginaCompras__producto__info'>
                    <div className='paginaCompras__producto__info__nombre'>{pizzaSeleccionada[0].name}</div>
                    <div className='paginaCompras__producto__info__cantidad'><b>{`x${contador}`}</b></div>
                </div>
                <div className='paginaCompras__producto__precio'><b>{`$${pizzaSeleccionada[0].precio} COP`}</b></div>
            </div>
            <div className='paginaCompras__informacion'><p className='paginaCompras__informacion__letra'>Información de pago</p></div>
            {/* _________________________________________________________________________________ */}
            <form onSubmit={handleSubmit(onSubmit)} className="paginaCompras__comprasFormulario">
                <label className='paginaCompras__comprasFormulario__nombre'>
                    Nombre Completo
                    <input
                        type="text"
                        className='paginaCompras__comprasFormulario__nombre__input'
                        placeholder="Ingresa tu nombre"
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && <span>{errors.nombre.message}</span>}
                </label>
                <label className='paginaCompras__comprasFormulario__tarjeta'>
                    Número de tarjeta de credito
                    <input
                        type="number"
                        className='paginaCompras__comprasFormulario__tarjeta__input'
                        placeholder="1234 1234 1234 1234"
                        {...register("credito", {
                        required: true,
                        validate: ValidateC,
                        })}
                    />
                    {errors.credito && <span>{errors.credito.message}</span>}
                </label>
                <div className='paginaCompras__comprasFormulario__div'>
                    <label className='paginaCompras__comprasFormulario__div__FV'>
                    Fecha de vencimiento
                        <input
                            type="text"
                            className='paginaCompras__comprasFormulario__div__FV__input'
                            placeholder="MM/YY"
                            {...register("FV", {
                            required: true,
                            validate: ValidateFv,
                            })}
                        />
                        {errors.FV && <span>{errors.FV.message}</span>}
                    </label>
                    <label className='paginaCompras__comprasFormulario__div__cvv'>
                    CVV
                        <input
                            type="number"
                            className='paginaCompras__comprasFormulario__div__cvv__input'
                            placeholder="1234"
                            {...register("cvv", {
                            required: true,
                            validate: ValidateCvv
                            })}
                        />
                        {errors.cvv && <span>{errors.cvv.message}</span>}
                    </label>
                </div>
                <label className='paginaCompras__comprasFormulario__dirreccion'>
                    Dirrección
                    <input
                        type="text"
                        className='paginaCompras__comprasFormulario__dirreccion__input'
                        placeholder="Av.morelos #123"
                        {...register("direccion", {
                        required: true
                        })}
                    />
                    {errors.direccion && <span>{errors.direccion.message}</span>}
                </label>

                <button type="submit" className="paginaCompras__comprasFormulario__boton">Pagar Ahora</button>
            </form>
            {/* ___________________________________________________________________________________________ */}
        </div>
    </>
  )
}

export default Compra;