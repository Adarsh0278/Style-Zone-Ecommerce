import { createContext } from 'react';
import productsItems from '../assets/productsItems';

export const ShopContext = createContext();

const ShopProvider = (props) => {

    const currency = "$ "; // Dollar symbol
    const deliveryFee = 5.99;

    const value = {
        productsItems,
        currency,
        deliveryFee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;