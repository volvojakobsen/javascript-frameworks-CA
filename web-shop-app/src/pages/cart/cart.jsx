import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from "./cart-item"

const url = 'https://api.noroff.dev/api/v1/online-shop';

export const Cart = ({products, setProducts}) => {
    
    const { cartItems } = useContext(ShopContext);
    console.log(cartItems);
    
    return <div>
        <div>
            <h1>your cart items</h1>
        </div>
        <div className="cartItems">
            {products.map((product) => {
                if(cartItems[product.id]) {
                    return <CartItem data={product} />
                }
            })}
        </div>
    </div>
};