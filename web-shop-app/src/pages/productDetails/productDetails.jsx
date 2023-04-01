import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import "./productDetails.css";


export const ProductDetails = () => {
   const id = useParams(); 
   const [singleProduct, setSingleProduct] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
 
   useEffect(() => {
     async function getData() {
       try {
         setIsError(false);
         setIsLoading(true);
         const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id.id}`);
         const json = await response.json();
         setSingleProduct(json);
         setIsLoading(false);
       } catch (error) {
         setIsLoading(false);
         setIsError(true);
       }
     }
 
     getData();
   }, [id.id]);

   

   const savings = parseInt(singleProduct.price) - parseInt(singleProduct.discountedPrice);
   const formatedSavings = "Discounted: $" + savings + " Off!";
   
   
 
   if (isLoading) {
     return <div className="loader"></div>;
   }
 
   if (isError) {
     return <div>Error loading data</div>;
   }

   return <>
    <div className="container">
        <div className="singleItem">
            <img src={singleProduct.imageUrl} className="singleProductImage" alt="" srcSet="" />
            <div className="details">
               <h2>{singleProduct.title}</h2>
              <div className="pricing">
                <h3>Price: ${singleProduct.discountedPrice}</h3>
                <div>{savings > 0 ? <h4>{formatedSavings}</h4> : <h4></h4>}</div>
              </div>
              <h1>Rating: {singleProduct.rating} of 5</h1>
              <div>
                  <button onClick={() => removeFromCart(id.id)}> - </button>
                  <input value={cartItems[id.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id.id)} />
                  <button onClick={() => addToCart(id.id)}> + </button>
              </div>
              <div className="description">
              <p>{singleProduct.description}</p>
              </div>
              <div>
              <h4>Reviews</h4>
              {singleProduct.reviews && singleProduct.reviews.map(post =>{
                return (
                  <div className="singleReview" key={post.id}>
                    <div className="name"><div>By: {post.username}</div>Rated it: {post.rating} of 5.</div>
                    <div className="comment">{post.description}</div>
                  </div>
                );

              })};
              </div>
              
            </div>
        </div>
    </div>
    </>
};
