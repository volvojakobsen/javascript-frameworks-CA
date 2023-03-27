import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";

export const Product = (props) => {
    const {id, title, description, price, imageUrl} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    console.log("cartitems");
    console.log(cartItems);
    return (<div className="product">
        <img src={imageUrl} className="product-img" alt="" srcset="" />
        <h2>{title}</h2>
        <h4>{price}</h4>
        <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        <p>{description}</p>
    </div>);
}