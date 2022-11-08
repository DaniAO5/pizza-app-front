import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Search = () => {

    const searchInput = useRef();

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    const onSubmitSearch = (e) => {
        e.preventDefault();

        setSearchParams({ pizza: searchInput.current.value });
      
    };

    useEffect(() => {

        if (searchParams.get("pizza")) {

            console.log("useSearchParams ", searchParams.get("pizza"));

            searchInput.current.value = searchParams.get("pizza");


            console.log("fetch api");
        }

    }, [searchParams]);


    return (
        <>
            <Header />
            <form onSubmit={onSubmitSearch}></form>
            <Footer />
        </>
    )
}

export default Search;
