import React, { useContext } from "react";
import { ShopContext, ShopContextProvider } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, title, description, price, imageUrl} = props.data;
    const { CartItems } = useContext(ShopContext);
    console.log("vdfbvfd");

    console.log(CartItems);



    return <div className="cart">
        <div className="productInCart">
          <img src={imageUrl} className="productImage" alt="" srcset="" />
          <div>
            <h2>{title}</h2>
            <h4>${price}</h4>
            <div>
                <button> - </button>
                <input value={CartItems}/>
                <button> + </button>
            </div>
            <p>{description}</p>
          </div>
        </div>
    </div>
}