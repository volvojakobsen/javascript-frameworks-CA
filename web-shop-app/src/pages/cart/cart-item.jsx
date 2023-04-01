import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, title, description, discountedPrice, imageUrl} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    



    return <div className="cart">
        <div className="productInCart">
          <img src={imageUrl} className="productImage" alt="" srcSet="" />
          <div>
            <h2>{title}</h2>
            <h4>${discountedPrice}</h4>
            <div>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input className="inputAmountOfItems" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
            <p>{description}</p>
          </div>
        </div>
    </div>
}