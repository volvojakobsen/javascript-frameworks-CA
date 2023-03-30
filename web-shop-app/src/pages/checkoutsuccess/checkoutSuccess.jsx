import React from 'react';
import "./checkoutSuccess.css";
import { useNavigate } from 'react-router-dom';



export const CheckoutSuccess = () => {
    const navigate = useNavigate();

  return <>
  <div className='main'>
    <h1 className='checkoutTitle'>Checkout Was Successful!</h1>
    <p className='checkout-p'>order will be delivered to your door within a year or two.</p>
    <button onClick={() => navigate("/")}>Back to store</button>
  </div>
  </>
}

