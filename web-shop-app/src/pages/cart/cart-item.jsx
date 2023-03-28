import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, title, description, price, imageUrl} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    



    return <div className="cart">
        <div className="productInCart">
          <img src={imageUrl} className="productImage" alt="" srcset="" />
          <div>
            <h2>{title}</h2>
            <h4>${price}</h4>
            <div>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
            <p>{description}</p>
          </div>
        </div>
    </div>
}