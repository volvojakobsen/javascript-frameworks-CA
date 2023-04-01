import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item"
import { useNavigate } from "react-router-dom";
import "./cart.css"



export const Cart = ({products}) => {
    
    const { cartItems, setCartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const ResetCart = () => {
        setCartItems([]);
        navigate("/checkoutSuccess");
    }
    
    
    return <div className="main">
        <div>
            <h1>your cart items</h1>
        </div>
        <div className="cartItems">
            {products.map((product, k) => {
                if(cartItems[product.id]) {
                    return <CartItem key={k} data={product} />
                }
            })}
        </div>
        {totalAmount > 0 ? (
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={() => ResetCart()}  >Checkout</button>
        </div>
        ) : (
            <h1>your cart is empty</h1>
        )}
    </div>
};