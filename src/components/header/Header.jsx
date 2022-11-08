import React from "react";
import './styleHeader.scss'

const Header = () =>{
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(usuario.imagen);
    return(
        <>
            <header className="header">
                <div className="header__izquierda">
                    <div>
                        <strong>Home</strong>
                    </div>
                    <div>
                        <p>{`¡Qué bueno verte ${usuario.name}!`}</p>
                    </div>
                </div>
                <div className="header__derecha">
                    <div className="header__derecha__contenedor"><img src={usuario.imagen} alt="" className="header__derecha__contenedor__img"/></div>
                </div>
            </header>
        </>
    )
};

export default Header;