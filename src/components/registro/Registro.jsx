import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './registrostyle.scss';
import axios from 'axios';
import Swal from "sweetalert2";
import background from "./pisassScript.png";

const URL_API = "https://pizzaback-production.up.railway.app/users";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const URLLogin = `${URL_API}?email=${data.email}&password=${data.password}&name=${data.nombre}`
    const login = await axios.get(URLLogin);
    const loginComprobacion = login.data;
    const resultado = login.data[0];
    console.log(resultado);
    console.log(loginComprobacion);
    if (loginComprobacion != '') {
      console.log('el usuario existe');
      Swal.fire(
        'upps',
        'El usuario o la contraseña existen',
        'error'
      )
    } else {
      console.log('no hay usuario');
      await axios.post(URLLogin, data);
      navigate('/');

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
          <p>Regístrate gratis:</p>
          <label>
            <input
              type="text"
              placeholder="   Escriba su nombre..."
              {...register("nombre", { required: true })}
              className={errors.nombre ? "input--error" : ""}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </label>
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
              })} className={errors.password ? "input--error" : ""}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>


          <button type="submit">Guardar</button>
        </form>
      </div>
    </>
  );
};
export default Login;
