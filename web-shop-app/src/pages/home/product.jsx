import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
    const {id, title, description, discountedPrice, imageUrl} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    const navigate = useNavigate();
   
    return (<div className="product">
        <img src={imageUrl} className="product-img" alt="product image" srcSet="" />
        <h2>{title}</h2>
        <h4>{discountedPrice}</h4>
        <div>
        <button className="view-btn" onClick={() => navigate(`/productDetails/${id}`)}>View Item</button>
        <button className="add-btn" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
        <p>{description}</p>
    </div>);
}