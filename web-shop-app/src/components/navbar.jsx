import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";



export const Navbar = () => {

    const { totalItems } = useContext(ShopContext);
    const totalItems2 = totalItems();

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/cart"> <ShoppingCart size={32} /> <span>{totalItems2}</span></Link>
            </div>
        </div>
    )
}