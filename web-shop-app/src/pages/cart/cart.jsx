import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item"
import { useNavigate } from "react-router-dom";
import "./cart.css"



export const Cart = ({products, setProducts}) => {
    
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    
    
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
        {totalAmount > 0 ? (
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        ) : (
            <h1>your cart is empty</h1>
        )}
    </div>
};