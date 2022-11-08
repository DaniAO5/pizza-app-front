import React, { createContext } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "../components/login/Login.jsx";
import Home from '../components/home/Home.jsx'
import Registro from '../components/registro/Registro.jsx'
import Pizza from "../components/pizza/Pizza.jsx";
import Compra from "../components/compra/Compra.jsx";
import { useState } from "react";
import Filter from "../components/filtro/Filter.jsx";
import Search from "../components/filtro/Search.jsx";
import ComprasRealizadas from "../components/comprarealizadas/ComprasRealizadas.jsx";
import CompraLista from "../components/compralista/CompraLista.jsx";

export const AppContext = createContext({});
const Router = () =>{
    const [usuario,setUsuario] = useState({});
    const [contador,setContaddor]=useState(0);
    const NumeroPizzas =[];
    const pizzaSeleccionada = [];
    const paginaAtras =[];
    const comprasEchas=[];

    return(
        <AppContext.Provider value={{
            usuario,
            setUsuario,
            NumeroPizzas,
            contador,
            setContaddor,
            pizzaSeleccionada,
            paginaAtras,
            comprasEchas
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='home' element={<Home />}/>
                    <Route path='registro' element={<Registro />}/>
                    <Route path='/pizza/:pizza' element={<Pizza />}/>
                    <Route path='/compra' element={<Compra />}/>
                    <Route path='/filtro' element={<Filter />}/>
                    <Route path='/search' element={<Search />}/>
                    <Route path='/comprarealizada' element={<ComprasRealizadas />}/>
                    <Route path='/compraLista' element={<CompraLista />}/>
                </Routes>
            </BrowserRouter>
         </AppContext.Provider>
    )
}

export default Router;