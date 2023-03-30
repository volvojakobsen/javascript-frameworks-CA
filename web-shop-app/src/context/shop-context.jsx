import React, { createContext, useState, useEffect} from "react";


export const ShopContext = createContext(null);

const url = 'https://api.noroff.dev/api/v1/online-shop';



export const ShopContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    


    useEffect(() => {
        async function getData() {
          try {
            const response = await fetch(url);
            const products2 = await response.json();
            setProducts(products2);
            return products2;
          } catch (error) {
            return <div>There was a problem fetching the product.</div>
          }
        }
    
        getData();
      }, []);
    const [cartItems, setCartItems] = useState([]);

   

    const totalItems = () => {
        return Object.values(cartItems).reduce((total, value) => total + value, 0)
      }
    
    
    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === item);
                totalAmount += cartItems[item] * itemInfo.price;
            }
            
        }
        return parseInt(totalAmount);
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

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, totalItems, setCartItems};

   

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

