import React from 'react';
import { createContext } from 'react';
import productsItems from '../assets/productsItems';
import useState from 'react';   

export const ShopContext = createContext();

const ShopProvider = (props) => {

    const currency = "$ "; // Dollar symbol
    const deliveryFee = 5.99;
    const [searcthTerm, setSearchTerm] = React.useState(""); // State for search term
    const [searchResults, setSearchResults] = React.useState(true);
    const value = {
        productsItems,
        currency,
        deliveryFee,
        searcthTerm,
        setSearchTerm,
        searchResults,
        setSearchResults
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;