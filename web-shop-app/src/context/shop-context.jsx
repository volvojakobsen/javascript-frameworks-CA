import React, { createContext, useState,} from "react";

export const ShopContext = createContext(null);





export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const resetCart = itemId => {
        setCartItems((prev) => ({...prev, [itemId]:  + 0}))
    }

    const addToCart = itemId => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]:  + 1}))
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
        
    }

    const removeFromCart = itemId => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart};
   

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

