import React, { createContext, useState } from 'react';
import productsItems from '../assets/productsItems';

export const ShopContext = createContext();

const ShopProvider = (props) => {
    const currency = "$ ";
    const deliveryFee = 5.99;
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(false);

    const value = {
        productsItems,
        currency,
        deliveryFee,
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;