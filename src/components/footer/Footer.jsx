import React from 'react'
import './styleFooter.scss';
import { useNavigate } from 'react-router-dom';



const Footer = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    };

    const handleFilter = () => {
        navigate('/filtro');
    };

    const handleCompras = () => {
        navigate('/comprarealizada');
    };

    return (
        <>
            <div className='footer'>
                <div className='footer_home' onClick={handleHome}>
                    <img src="../../images/home" alt="" /> Home
                </div>
                <div className='footer_car' onClick={handleCompras}>
                    <img src="/car.png" alt="" />
                </div>
                <div className='footer_search' onClick={handleFilter}>
                    <img src="/search.png" alt="" /> Buscar
                </div>
            </div>
        </>
    )
};

export default Footer;
