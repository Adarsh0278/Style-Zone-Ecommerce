import React, { createContext, useState } from 'react';
import productsItems from '../assets/productsItems';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopProvider = (props) => {
    const currency = "$ ";
    const deliveryFee = 5.99;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(false);
    
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please select a product size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
        toast.success('Item added to cart!');
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    
    if (quantity === 0) {
        delete cartData[itemId][size];
        // Clean up the item ID if it has no more sizes selected
        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
        }
    } else {
        cartData[itemId][size] = quantity;
    }
    
    setCartItems(cartData);
};

    const value = {
        productsItems,
        currency,
        deliveryFee,
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        cartItems,      
        addToCart,      
        getCartCount,
        updateQuantity
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;