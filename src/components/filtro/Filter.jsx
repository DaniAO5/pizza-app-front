import React, {useRef} from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import './styleFilter.scss'

const Filter = () => {

  const searchInput= useRef();
  const navigate=useNavigate();
  
  const onSubmitSearch=()=>{
    const dataSearch={
      pizza:searchInput.current.value,
    };
    navigate({
      pathname:"search",
      search: createSearchParams(dataSearch).toString()
    });
  };
  return (
    <>
    <Header/>
    <form onSubmit={onSubmitSearch} className='formFilter'>
        <input type="search" ref={searchInput} placeholder='pizza peperoni, hawaiana, mexicana...' className='searchPizza'/>
        <button>Buscar</button>
        <p>Busca la pizza que más te gusta</p>
      </form>

    <Footer/>
    </>
  )
}

export default Filter;
