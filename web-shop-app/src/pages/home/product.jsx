import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = (props, search, products) => {
    const {id, title, description, price, imageUrl} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    const navigate = useNavigate();
   /*
    if (search === "") {
    }
    else if (products.filter((val) => {
        val.title.toLowerCase().includes(search.toLocaleLowerCase())
        return val;
    }))
    */
    return (<div className="product">
        <img src={imageUrl} className="product-img" alt="" srcset="" />
        <h2>{title}</h2>
        <h4>{price}</h4>
        <button onClick={() => navigate(`/productDetails/${id}`)}>View Item</button>
        <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        <p>{description}</p>
    </div>);
}