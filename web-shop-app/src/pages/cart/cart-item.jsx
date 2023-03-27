import React from "react";

export const CartItem = (props) => {
    const {id, title, description, price, imageUrl} = props.data;
    
    console.log(props.imageUrl);

    return <div>
        <img src={imageUrl} alt="" srcset="" />
        <p>grfdhtgjhndfg</p>
    </div>
}