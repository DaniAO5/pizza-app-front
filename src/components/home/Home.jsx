import React, { useContext } from "react";
import { AppContext } from '../../routes/Router.jsx'
import { useForm } from "react-hook-form";
import Header from "../header/Header.jsx";
import TodasPizzas from "../todasPizzas/TodasPizzas.jsx";
import Footer from "../footer/Footer.jsx";
import './styleHome.scss';

const Login = () => {
  // const {usuario} = useContext(AppContext);
  // // const prueba = [];
  // // prueba.push(usuario);
  // console.log(usuario);
  //pruba con props que no funcionaron______________________
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));
  console.log(usuario.imagen);
  console.log(usuario.name);
  



  return (
        <>
        
          <Header />
          <TodasPizzas />
          <Footer />
        </>   
        )
};
export default Login;
