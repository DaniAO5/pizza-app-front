import React, { useContext } from "react";
import { AppContext } from '../../routes/Router.jsx'
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import './loginStyle.scss';
import axios from 'axios';
import Swal from "sweetalert2";
import background from "./pisassScript.png";

const URL_API = "https://pizzaback-production.up.railway.app/users";

const Login = () => {

  const { usuario, setUsuario } = useContext(AppContext);


  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const URLLogin = `${URL_API}?email=${data.email}&password=${data.password}`
    const login = await axios.get(URLLogin);
    const loginComprobacion = login.data;
    const resultado = login.data[0];
    sessionStorage.setItem('usuario', JSON.stringify(resultado));
    setUsuario(resultado);
    console.log(usuario);
    console.log(resultado);
    console.log(loginComprobacion);
    if (loginComprobacion != '') {
      const pizzas = await axios.get("https://pizzaback-production.up.railway.app/pizzas");
      const pizzasArray = pizzas.data;
      sessionStorage.setItem('pizzas', JSON.stringify(pizzasArray));
      navigate('/home');
    } else {
      console.log('no hay usuario')
      Swal.fire(
        'upps',
        'El usuario o la contraseña no existen',
        'error'
      )
    }
  };

  const ValidatePass = (value) => {
    if (value.length < 8) {
      return "La contraseña debería contener al menos 8 caracteres";
    } else if (value.length > 16) {
      return "La contraseña debe contener menos de 16 de caracteres";
    } else {
      return true;
    }
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className='imgDesktop'>

        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <p>Inicia sesión en tu cuenta</p>
          <label>

            <input
              type="text"
              placeholder="   Escriba su email..."
              {...register("email", { required: true })}
              className={errors.email ? "input--error" : ""}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label>

            <input
              type="password"
              placeholder="   Escriba su contraseña..."
              {...register("password", {
                required: true,
                validate: ValidatePass,
              })} className={errors.email ? "input--error" : ""}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>

          <button type="submit" className="iniciar_sesion">Iniciar sesión</button>
          <p>¿No estás registrado? </p>
          <Link className='form_link' to="/registro">Regístrate</Link>
        </form>
      </div>
    </>
  );
};
export default Login;
